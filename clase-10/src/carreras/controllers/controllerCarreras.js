import * as api from '../services/serviceCarreras.js'
import { prepararRespuestaConError } from '../../shared/errors/mappings/mappings.js'


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
        const { mensaje, codigo } = prepararRespuestaConError(error)
        res.status(codigo).json({ mensaje })
    }
}

export async function getById(req, res, next) {
    try {
        const carrera = await api.obtenerCarreraSegunId(req.params.id)
        res.json(carrera)
    } catch (error) {
        const { mensaje, codigo } = prepararRespuestaConError(error)
        res.status(codigo).json({ mensaje })
    }
}

export async function post(req, res, next) {
    try {
        const carrera = req.body
        const carreraAgregada = await api.agregarCarrera(carrera)
        res.status(201).json(carreraAgregada)
    } catch (error) {
        if (error.tipo === 'NOMBRE_UNICO') {
            res.status(409).json({ error: error.message })
        } else {
            res.status(400).json({ error: error.message })
        }
    }
}

export async function put(req, res, next) {
    try {
        const datosActualizados = req.body
        const carreraActualizada = await api.reemplazarCarrera(req.params.id, datosActualizados)
        res.json(carreraActualizada)
    } catch (error) {
        if (error.tipo === 'NO_ENCONTRADO') {
            res.status(404).json({ error: error.message })
        } else {
            res.status(400).json({ error: error.message })
        }
    }
}

export async function deleteById(req, res, next) {
    try {
        await api.borrarCarreraSegunId(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

