// class Persona {
//     constructor() {
//         this.nombre = 'mariano'
//         this.apellido = 'aquino'
//     }
// }

// const instanciaDePersona = new Persona()

// console.log(instanciaDePersona)

//------------------------------------------

// const o = new Object()

// const direccion = {
//     calle: 'rivadavia',
//     nro: 4000,
//     cp: 1180
// }

// const persona = {
//     nombre: 'mariano',
//     apellido: 'aquino',
//     direccion: {
//         calle: 'rivadavia',
//         nro: 4000,
//         cp: 1180
//     },
//     telefonos: ['1234', '5678'],
//     saludar: function() {
//         console.log(`hola, ${persona.nombre}`)
//     }
// }

// const persona2 = {
//     nombre: 'marcia',
//     apellido: 'lopez',
//     direccion: {
//         calle: 'rivadavia',
//         nro: 4010,
//         cp: 1180
//     }
// }

// const referenciaAPersona = persona

// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.direccion)
// console.log(persona.direccion.calle)

// console.log(persona2)

// console.log(referenciaAPersona)

// referenciaAPersona.nombre = 'jose'
// console.log(persona)

// const persona3 = new Object()
// persona3.nombre = 'juanita'
// persona3.apellido = 'vulgaria'
// persona3['direccion'] = {
//     calle: '9 de julio',
//     nro: 100,
//     cp: '?'
// }

// console.log(persona3)

// const persona = {
//     nombre: 'mariano',
//     apellido: 'aquino',
//     direccion: {
//         calle: 'rivadavia',
//         nro: 4000,
//         cp: 1180
//     },
//     telefonos: ['1234', '5678']
// }

// const persona2 = {
//     nombre: 'marcia',
//     apellido: 'lopez',
//     direccion: {
//         calle: 'rivadavia',
//         nro: 4010,
//         cp: 1180
//     },
//     telefonos: ['1234', '5678']
// }

// console.log(persona)

function divisionEntera(num, div) {
    if (div === 0) {
        throw new Error('no se puede dividir por cero')
    } else {
        const cociente = Math.floor(num / div) //  Math.ceil() redondea para arriba
        const resto = num % div
        // return {
        //     cociente: cociente,
        //     resto: resto
        // }
        // const resultado = new Object()
        // const resultado = {}
        // resultado.cociente = cociente
        // resultado.resto = resto
        // return {
        //     cociente,
        //     resto,
        // }
        return { cociente, resto }
    }
}

// const result = divisionEntera(10, 3)

// console.log(result)

// console.log(result.cociente)
// console.log(result.resto)

// console.log(result['cociente'])
// console.log(result['resto'])

// const cociente = result.cociente
// const resto = result.resto

// const { cociente, resto } = result

// console.log(cociente)
// console.log(resto)

// const { cociente, resto } = divisionEntera(10, 3)

// console.log(cociente)
// console.log(resto)

const { cociente } = divisionEntera(10, 3)

console.log(cociente)