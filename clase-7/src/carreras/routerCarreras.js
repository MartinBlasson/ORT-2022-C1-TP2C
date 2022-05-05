import { Router } from 'express'
import {
    obtenerCarreras,
    agregarCarrera,
    obtenerCarrerasSegunTema,
    obtenerCarreraSegunId,
    borrarCarreraSegunId,
    reemplazarCarrera
} from './carreras.js'

const routerCarreras = new Router()

routerCarreras.get('/', (req, res) => {
    let carreras
    if (req.query.tema) {
        carreras = obtenerCarrerasSegunTema(req.query.tema)
    } else {
        carreras = obtenerCarreras()
    }
    res.json(carreras)
})

routerCarreras.get('/:id', (req, res) => {
    try {
        const carrera = obtenerCarreraSegunId(req.params.id)
        res.json(carrera)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

routerCarreras.post('/', (req, res) => {
    try {
        const carrera = req.body
        const carreraAgregada = agregarCarrera(carrera)
        res.status(201).json(carreraAgregada)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

routerCarreras.delete('/:id', (req, res) => {
    try {
        borrarCarreraSegunId(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

routerCarreras.put('/:id', (req, res) => {
    try {
        const datosActualizados = req.body
        const carreraActualizada = reemplazarCarrera(req.params.id, datosActualizados)
        res.json(carreraActualizada)
    } catch (error) {
        if (error.tipo == 'not found') {
            res.status(404).json({ error: error.message })
        } else {
            res.status(400).json({ error: error.message })
        }
    }
})

export { routerCarreras }