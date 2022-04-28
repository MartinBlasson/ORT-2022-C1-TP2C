import express from 'express'
import {
    obtenerCarreras,
    agregarCarrera,
    obtenerCarrerasSegunTema,
    obtenerCarreraSegunId,
    borrarCarreraSegunId,
    reemplazarCarrera
} from './carreras.js'

const app = express()

app.use(express.json())

app.get('/carreras', (req, res) => {
    let carreras
    if (req.query.tema) {
        carreras = obtenerCarrerasSegunTema(req.query.tema)
    } else {
        carreras = obtenerCarreras()
    }
    res.json(carreras)
})

app.get('/carreras/:id', (req, res) => {
    try {
        const carrera = obtenerCarreraSegunId(req.params.id)
        res.json(carrera)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

app.post('/carreras', (req, res) => {
    try {
        const carrera = req.body
        const carreraAgregada = agregarCarrera(carrera)
        res.status(201).json(carreraAgregada)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.delete('/carreras/:id', (req, res) => {
    try {
        borrarCarreraSegunId(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

app.put('/carreras/:id', (req, res) => {
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

let server

export function conectar(port = 0) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve(server.address().port)
        })
        server.on('error', error => {
            reject(error)
        })
    })
}

export function desconectar() {
    return new Promise((resolve, reject) => {
        server.close(error => {
            if (error) {
                reject(error)
            } else {
                resolve()
            }
        })
    })
}
