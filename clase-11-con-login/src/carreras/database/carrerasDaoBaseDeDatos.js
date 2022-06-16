import { crearErrorRecursoNoEncontrado } from '../../shared/errors/models/ErrorRecursoNoEncontrado.js'
import { crearErrorDePersistencia } from '../../shared/errors/models/ErrorDePersistencia.js';

import { database } from '../../shared/databases/mongoDbClient.js';

const carreras = database.collection('carreras');

export async function guardarCarrera(carrera) {
    try {
        await carreras.updateOne({ id: carrera.id }, { $set: carrera }, { upsert: true })
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}

export async function recuperarCarrera(id) {
    let buscada
    try {
        buscada = await carreras.findOne({ id }, { projection: { _id: 0 } })
    } catch (error) {
        throw crearErrorDePersistencia()
    }

    if (!buscada) {
        throw crearErrorRecursoNoEncontrado('carrera')
    }

    return buscada
}

export async function recuperarCarreras() {
    try {
        const carrerasArray = await carreras.find().project({ _id: 0 }).toArray();
        return carrerasArray
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}

export async function recuperarCarrerasSegunTema(tema) {
    try {
        return await carreras.find({ temas: { $all: [tema] } }).project({ _id: 0 }).toArray()
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}

export async function eliminarCarrera(id) {
    let result
    try {
        result = await carreras.deleteOne({ id })
    } catch (error) {
        throw crearErrorDePersistencia()
    }

    if (result.deletedCount === 0) {
        throw crearErrorRecursoNoEncontrado('carrera')
    }
}

export async function eliminarCarreras() {
    try {
        await carreras.deleteMany({})
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}

export async function nombreEstaDisponible(nombre) {
    try {
        const result = await carreras.findOne({ nombre });
        return !result
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}
