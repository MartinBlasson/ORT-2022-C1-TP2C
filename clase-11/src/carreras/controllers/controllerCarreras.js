import * as api from '../services/serviceCarreras.js'

export async function getAll(req, res, next) {
    let carreras
    try {
        if (req.query.tema) {
            carreras = await api.obtenerCarrerasSegunTema(req.query.tema)
        } else {
            carreras = await api.obtenerCarreras()
        }
        res.json(carreras)
    } catch (error) {
        next(error)
    }
}

export async function getById(req, res, next) {
    try {
        const carrera = await api.obtenerCarreraSegunId(req.params.id)
        res.json(carrera)
    } catch (error) {
        next(error)
    }
}

export async function post(req, res, next) {
    try {
        const carrera = req.body
        const carreraAgregada = await api.agregarCarrera(carrera)
        res.status(201).json(carreraAgregada)
    } catch (error) {
        next(error)
    }
}

export async function put(req, res, next) {
    try {
        const datosActualizados = req.body
        const carreraActualizada = await api.reemplazarCarrera(req.params.id, datosActualizados)
        res.json(carreraActualizada)
    } catch (error) {
        next(error)
    }
}

export async function deleteById(req, res, next) {
    try {
        await api.borrarCarreraSegunId(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

