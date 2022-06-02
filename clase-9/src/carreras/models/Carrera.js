import { obtenerNuevoId } from '../../shared/ids/Id.js'

export function crearCarrera(datos) {
    if (!datos.nombre) {
        throw crearErrorDeDatosFaltantes('nombre')
    }

    if (!datos.temas) {
        throw crearErrorDeDatosFaltantes('temas')
    }

    const carrera = {
        id: obtenerNuevoId('carrera'),
        nombre: datos.nombre,
        temas: datos.temas,
    }

    return carrera
}