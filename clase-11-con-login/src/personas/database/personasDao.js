import * as daoMemoria from './personasDaoMemoria.js'
import * as daoDesconectado from './personasDaoDesconectado.js'
import * as daoBaseDeDatos from './personasDaoBaseDeDatos.js'
import { MODO_PERSISTENCIA } from '../../shared/config/config.js'

let daoPersonas

switch (MODO_PERSISTENCIA) {
    case 'TEST':
        daoPersonas = daoDesconectado
        break
    case 'DB':
        daoPersonas = daoBaseDeDatos
        break
    default:
        daoPersonas = daoMemoria
}


export default daoPersonas