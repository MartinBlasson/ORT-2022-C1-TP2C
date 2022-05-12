import { Router } from 'express'
import * as api from '../services/carreras.js'

import { prepararRespuestaConError } from '../../shared/errors/mappings/mappings.js'

const routerCarreras = new Router()

routerCarreras.get('/', (req, res) => {
    let carreras
    try {
        if (req.query.tema) {
            carreras = api.obtenerCarrerasSegunTema(req.query.tema)
        } else {
            carreras = api.obtenerCarreras()
        }
        res.json(carreras)
    } catch (error) {
        const { mensaje, codigo } = prepararRespuestaConError(error)
        res.status(codigo).json({ mensaje })
    }
})

routerCarreras.get('/:id', (req, res) => {
    try {
        const carrera = api.obtenerCarreraSegunId(req.params.id)
        res.json(carrera)
    } catch (error) {
        const { mensaje, codigo } = prepararRespuestaConError(error)
        res.status(codigo).json({ mensaje })
    }
})

routerCarreras.post('/', (req, res) => {
    try {
        const carrera = req.body
        const carreraAgregada = api.agregarCarrera(carrera)
        res.status(201).json(carreraAgregada)
    } catch (error) {
        if (error.tipo === 'NOMBRE_UNICO') {
            res.status(409).json({ error: error.message })
        } else {
            res.status(400).json({ error: error.message })
        }
    }
})

routerCarreras.delete('/:id', (req, res) => {
    try {
        api.borrarCarreraSegunId(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

routerCarreras.put('/:id', (req, res) => {
    try {
        const datosActualizados = req.body
        const carreraActualizada = api.reemplazarCarrera(req.params.id, datosActualizados)
        res.json(carreraActualizada)
    } catch (error) {
        if (error.tipo === 'NO_ENCONTRADO') {
            res.status(404).json({ error: error.message })
        } else {
            res.status(400).json({ error: error.message })
        }
    }
})

export { routerCarreras }