import { crearErrorDePersistencia } from '../../shared/errors/models/ErrorDePersistencia.js'

export function guardarPersona(persona) {
    throw crearErrorDePersistencia()
}

export function recuperarPersona(id) {
    throw crearErrorDePersistencia()
}

export function recuperarPersonas() {
    throw crearErrorDePersistencia()
}

export function eliminarPersona(id) {
    throw crearErrorDePersistencia()
}

export function eliminarPersonas() {
    throw crearErrorDePersistencia()
}
