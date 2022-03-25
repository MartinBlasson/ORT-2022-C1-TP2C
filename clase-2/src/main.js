// sintaxis vieja! no usar!
// const lib = require('./libs/lib.js')

// sintaxis nueva! sí usar!
// import / export

// import * as miLib from './libs/lib.js';

// console.log(miLib)

// console.log('hola mundo')

// console.log(miLib.crearSaludo('marian'))

//------------------------------------------------

// import from './libs/lib.js';

// console.log('hola mundo')

// console.log(miLib.crearSaludo('marian'))

//------------------------------------------------

import { crearSaludoEnfatico, crearDespedidaEnfatica } from './libs/saludos.js';
import { desesperar, otakuear } from './libs/enfatizadores.js'

console.log(crearSaludoEnfatico('marian', desesperar))
console.log(crearDespedidaEnfatica('marian', otakuear))

// const miEnfatizador = (frase) => { return frase + '...***' }
// console.log(crearSaludoEnfatico('marian', miEnfatizador))

console.log(crearSaludoEnfatico('marian', msg => msg + '...***'))