import express from 'express'
import { obtenerCarreras, agregarCarrera } from './carreras.js'

const app = express()

app.use(express.json())

app.get('/carreras', (req, res) => {
    const carreras = obtenerCarreras()
    res.json(carreras)
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

let server

export function conectar() {
    return new Promise((resolve, reject) => {
        server = app.listen(3000, () => {
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
