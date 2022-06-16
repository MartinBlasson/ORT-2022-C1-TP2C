import { Router } from 'express'
import * as controllerPersonas from '../controllers/controllerPersonas.js'

const routerPersonas = new Router()

routerPersonas.post('/', controllerPersonas.post)

export default routerPersonas