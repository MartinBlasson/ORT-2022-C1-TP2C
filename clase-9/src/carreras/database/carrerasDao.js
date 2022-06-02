import { MODO_PERSISTENCIA } from '../../config/config.js'
import * as daoArchivos from './carrerasDaoArchivo.js'
import * as daoMemoria from './carrerasDaoMemoria.js'

let dao

switch (MODO_PERSISTENCIA) {
    case 'ARCHIVO':
        dao = daoArchivos
        break
    default:
        dao = daoMemoria
}

export default dao
