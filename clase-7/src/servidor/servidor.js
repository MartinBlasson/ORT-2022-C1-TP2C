import express from 'express'
import { routerCarreras } from '../carreras/routerCarreras.js'
import { routerPersonas } from '../personas/routerPersonas.js'

const app = express()

app.use(express.json())

app.use('/api/carreras', routerCarreras)
app.use('/api/personas', routerPersonas)

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
