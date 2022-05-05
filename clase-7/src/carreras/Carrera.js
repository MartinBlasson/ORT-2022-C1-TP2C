import { obtenerNuevoId } from '../compartidos/ids.js'

export function crearCarrera(datos) {
    if (!datos.nombre) {
        throw new Error('el campo nombre es obligatorio')
    }

    if (!datos.temas) {
        throw new Error('el campo temas es obligatorio')
    }

    const carrera = {
        id: obtenerNuevoId('carrera'),
        nombre: datos.nombre,
        temas: datos.temas,
    }

    return carrera
}