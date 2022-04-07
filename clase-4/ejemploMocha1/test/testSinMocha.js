import assert from 'assert'
import { armarListado } from '../src/listados.js'

function siLaBaseEstaVaciaGeneraUnListadoVacio() {
    const baseVacia = []
    const result = armarListado(baseVacia)
    assert.deepStrictEqual(result, [])
}

function siLaBaseTieneUnaPersonaAdultaDevuelveSuTelefono() {
    const baseConUnaPersonaAdulta = [
        {
            nombre: 'c',
            edad: '30',
            telefono: '1'
        }
    ]
    const result = armarListado(baseConUnaPersonaAdulta)
    assert.deepStrictEqual(result, ['1'])
}

function siLaBaseTieneVariasPersonasAdultasDevuelveSusTelefonos() {
    const tel1 = '1'
    const tel2 = '2'
    const tel3 = '3'

    // setup
    const baseConPersonasAdultas = [
        {
            nombre: 'c',
            edad: '30',
            telefono: tel1
        },
        {
            nombre: 'g',
            edad: '30',
            telefono: tel2
        }, {
            nombre: 'x',
            edad: '30',
            telefono: tel3
        }
    ]
    // exercise
    const result = armarListado(baseConPersonasAdultas)

    // assertion
    assert.deepStrictEqual(result, [tel1, tel2, tel3])
}

function siLaBaseTieneMenoresNoLosTieneEnCuenta() {
    const tel1 = '1'
    const tel2 = '2'
    const tel3 = '3'

    // setup
    const baseConPersonasDeEdadesDiversas = [
        {
            nombre: 'c',
            edad: '18',
            telefono: tel1
        },
        {
            nombre: 'g',
            edad: '17',
            telefono: tel2
        }, {
            nombre: 'x',
            edad: '18',
            telefono: tel3
        }
    ]
    // exercise
    const result = armarListado(baseConPersonasDeEdadesDiversas)

    // assertion
    assert.deepStrictEqual(result, [tel1, tel3])
}

siLaBaseEstaVaciaGeneraUnListadoVacio()
siLaBaseTieneUnaPersonaAdultaDevuelveSuTelefono()
siLaBaseTieneVariasPersonasAdultasDevuelveSusTelefonos()
siLaBaseTieneMenoresNoLosTieneEnCuenta()

// console.log('todo ok!')

//==================================================================

// const personas = [
//     {
//         nombre: 'a',
//         edad: '10',
//         telefono: '1'
//     },
//     {
//         nombre: 'b',
//         edad: '20',
//         telefono: '1'
//     },
//     {
//         nombre: 'c',
//         edad: '30',
//         telefono: '1'
//     },
//     {
//         nombre: 'd',
//         edad: '40',
//         telefono: '4'
//     },
//     {
//         nombre: 'e',
//         edad: '50',
//         telefono: '5'
//     },
//     {
//         nombre: 'f',
//         edad: '60',
//         telefono: '6'
//     }
// ]
