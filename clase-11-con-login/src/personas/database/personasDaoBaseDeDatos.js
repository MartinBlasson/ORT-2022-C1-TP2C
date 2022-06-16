import { crearErrorDePersistencia } from '../../shared/errors/models/ErrorDePersistencia.js';

import { database } from '../../shared/databases/mongoDbClient.js';

const personas = database.collection('personas');

export async function guardarPersona(persona) {
    try {
        await personas.updateOne({ id: persona.id }, { $set: persona }, { upsert: true })
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}

export async function recuperarPersonas() {
    try {
        const personasArray = await personas.find().project({ _id: 0 }).toArray();
        return personasArray
    } catch (error) {
        throw crearErrorDePersistencia()
    }
}