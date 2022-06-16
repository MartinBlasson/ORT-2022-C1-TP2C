import express from 'express'
import routerCarreras from '../carreras/router/routerCarreras.js'
import routerPersonas from '../personas/router/routerPersonas.js'
import { manejadorDeErrores } from '../shared/errors/middlewares/errorHandler.js'

const app = express()

app.use(express.json())

app.use('/api/carreras', routerCarreras)
app.use('/api/personas', routerPersonas)

app.use(manejadorDeErrores)

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
