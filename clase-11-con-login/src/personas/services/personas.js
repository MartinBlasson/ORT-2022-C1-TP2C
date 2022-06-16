import { crearPersona } from '../models/Persona.js'
import daoPersonas from '../database/personasDao.js'

export function agregarPersona(datos) {
    const persona = crearPersona(datos)
    daoPersonas.guardarPersona(persona)
    return persona
}