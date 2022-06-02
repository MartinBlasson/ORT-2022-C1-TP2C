import { crearPersona } from '../models/Persona.js'
import { guardarPersona } from '../database/personasDao.js'

export function agregarPersona(datos) {
    const persona = crearPersona(datos)
    guardarPersona(persona)
    return persona
}