import { crearCarrera } from '../models/Carrera.js'
import dao from '../database/carrerasDao.js'
import { crearErrorNombreUnico } from '../../shared/errors/models/ErrorNombreUnico.js'

function validarNombreUnico(nombre) {
    if (!dao.nombreEstaDisponible(nombre)) throw crearErrorNombreUnico()
}

export function obtenerCarreras() {
    return dao.recuperarCarreras()
}

export function agregarCarrera(datosCarrera) {
    validarNombreUnico(datosCarrera.nombre)
    const carrera = crearCarrera(datosCarrera)
    dao.guardarCarrera(carrera)
    return carrera
}

export function borrarCarreras() {
    dao.eliminarCarreras()
}

export function obtenerCarrerasSegunTema(tema) {
    return dao.recuperarCarrerasSegunTema(tema)
}

export function obtenerCarreraSegunId(id) {
    return dao.recuperarCarrera(id)
}

export function borrarCarreraSegunId(id) {
    dao.eliminarCarrera(id)
}

export function reemplazarCarrera(id, datosCarrera) {
    const carrera = crearCarrera(datosCarrera)
    carrera.id = id
    dao.guardarCarrera(carrera)
}
