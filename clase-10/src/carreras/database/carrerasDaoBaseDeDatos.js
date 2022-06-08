import { crearErrorRecursoNoEncontrado } from '../../shared/errors/models/ErrorRecursoNoEncontrado.js'

import { MongoClient } from "mongodb"
const uri = "mongodb://root:mongopassword@localhost:27017?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri);

await client.connect();

const database = client.db('ort');
const carreras = database.collection('carreras');

export async function guardarCarrera(carrera) {
    const result = await carreras.updateOne({ id: carrera.id }, { $set: carrera }, { upsert: true })
    return
}

export async function recuperarCarrera(id) {
    const buscada = await carreras.findOne({ id }, { projection: { _id: 0 } })
    if (buscada) {
        return buscada
    } else {
        throw crearErrorRecursoNoEncontrado('carrera')
    }
}

export async function recuperarCarreras() {
    const carrerasArray = await carreras.find().project({ _id: 0 }).toArray();
    return carrerasArray
}

export async function recuperarCarrerasSegunTema(tema) {
    return await carreras.find({ temas: { $all: [tema] } }).project({ _id: 0 }).toArray()
}

export async function eliminarCarrera(id) {
    const result = await carreras.deleteOne({ id })
    if (result.deletedCount === 0) {
        throw crearErrorRecursoNoEncontrado('carrera')
    }
}

export async function eliminarCarreras() {
    await carreras.deleteMany({})
}

export async function nombreEstaDisponible(nombre) {
    const result = await carreras.findOne({ nombre });
    return !result
}
