import { crearPersona } from './Persona.js'

const personas = []

export function obtenerPersonas() {
    return [...personas]
}

export function agregarPersona(datos) {
    const persona = crearPersona(datos)
    personas.push(persona)
    return persona
}