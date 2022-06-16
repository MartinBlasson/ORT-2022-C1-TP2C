import { agregarPersona } from '../services/personas.js'

export async function post(req, res, next) {
    try {
        const personaAgregada = agregarPersona(req.body)
        res.status(201).json(personaAgregada)
    } catch (error) {
        next(error)
    }
}
