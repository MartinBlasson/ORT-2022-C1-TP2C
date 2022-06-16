import { crearCarrera } from '../models/Carrera.js'
import daoCarreras from '../database/carrerasDao.js'
import { crearErrorNombreUnico } from '../../shared/errors/models/ErrorNombreUnico.js'

async function validarNombreUnico(nombre) {
    const estaDisponible = await daoCarreras.nombreEstaDisponible(nombre)
    if (!estaDisponible) throw crearErrorNombreUnico()
}

export async function obtenerCarreras() {
    return await daoCarreras.recuperarCarreras()
}

export async function agregarCarrera(datosCarrera) {
    await validarNombreUnico(datosCarrera.nombre)
    const carrera = crearCarrera(datosCarrera)
    await daoCarreras.guardarCarrera(carrera)
    return carrera
}

export async function borrarCarreras() {
    await daoCarreras.eliminarCarreras()
}

export async function obtenerCarrerasSegunTema(tema) {
    return await daoCarreras.recuperarCarrerasSegunTema(tema)
}

export async function obtenerCarreraSegunId(id) {
    return await daoCarreras.recuperarCarrera(id)
}

export async function borrarCarreraSegunId(id) {
    await daoCarreras.eliminarCarrera(id)
}

export async function reemplazarCarrera(id, datosCarrera) {
    const carrera = crearCarrera(datosCarrera)
    carrera.id = id
    await daoCarreras.guardarCarrera(carrera)
    return carrera
}
