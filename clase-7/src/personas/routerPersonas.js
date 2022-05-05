import { Router } from 'express'
import { agregarPersona } from './personas.js'

function armarMensajeDeErrorDeValidacion(campo) {
    return `error en la validacion del campo '${campo}'`
}

function prepararRespuestaConError(error) {
    const httpError = {}
    switch (error.tipo) {
        case 'DATA_VALIDATION':
            httpError.mensaje = armarMensajeDeErrorDeValidacion(error.campo)
            httpError.codigo = 400
            break
        default:
            httpError.mensaje = 'error interno'
            httpError.codigo = 500
    }
    return httpError
}

const routerPersonas = new Router()

routerPersonas.post('/', (req, res) => {
    try {
        const personaAgregada = agregarPersona(req.body)
        res.status(201).json(personaAgregada)
    } catch (error) {
        const { codigo, mensaje } = prepararRespuestaConError(error)
        res.status(codigo).json({ mensaje })
    }
})

export { routerPersonas }