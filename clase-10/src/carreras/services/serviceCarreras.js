import { crearCarrera } from '../models/Carrera.js'
import dao from '../database/carrerasDao.js'
import { crearErrorNombreUnico } from '../../shared/errors/models/ErrorNombreUnico.js'

async function validarNombreUnico(nombre) {
    const estaDisponible = await dao.nombreEstaDisponible(nombre)
    if (!estaDisponible) throw crearErrorNombreUnico()
}

export async function obtenerCarreras() {
    return await dao.recuperarCarreras()
}

export async function agregarCarrera(datosCarrera) {
    await validarNombreUnico(datosCarrera.nombre)
    const carrera = crearCarrera(datosCarrera)
    await dao.guardarCarrera(carrera)
    return carrera
}

export async function borrarCarreras() {
    await dao.eliminarCarreras()
}

export async function obtenerCarrerasSegunTema(tema) {
    return await dao.recuperarCarrerasSegunTema(tema)
}

export async function obtenerCarreraSegunId(id) {
    return await dao.recuperarCarrera(id)
}

export async function borrarCarreraSegunId(id) {
    await dao.eliminarCarrera(id)
}

export async function reemplazarCarrera(id, datosCarrera) {
    const carrera = crearCarrera(datosCarrera)
    carrera.id = id
    await dao.guardarCarrera(carrera)
    return carrera
}
