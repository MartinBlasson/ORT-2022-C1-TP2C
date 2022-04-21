import express from 'express'
import { obtenerCarreras, agregarCarrera } from './carreras.js'

const app = express()

app.get('/carreras', (req, res) => {
    const carreras = obtenerCarreras()
    res.json(carreras)
})

app.post('/carreras', (req, res) => {
    const carrera = {} // ?
    agregarCarrera(carrera)
    res.status(201).json(carrera)
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
