import { Router } from 'express'
import * as controllerCarreras from '../controllers/controllerCarreras.js'

const routerCarreras = new Router()

routerCarreras.get('/', controllerCarreras.getAll)
routerCarreras.get('/:id', controllerCarreras.getById)
routerCarreras.post('/', controllerCarreras.post)
routerCarreras.delete('/:id', controllerCarreras.deleteById)
routerCarreras.put('/:id', controllerCarreras.put)

export default routerCarreras