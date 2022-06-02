import { Router } from 'express'
import { agregarPersona } from '../services/personas.js'

import { prepararRespuestaConError } from '../../shared/errors/mappings/mappings.js'

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