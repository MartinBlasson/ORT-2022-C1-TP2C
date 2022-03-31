import assert from 'assert'

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


function armarListado(base) {
    const result = []
    for (const p of base) {
        result.push(p.telefono)
    }
    return result
}

//========================================

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
    // setup
    const baseConPersonasAdultas = [
        {
            nombre: 'c',
            edad: '30',
            telefono: '1'
        },
        {
            nombre: 'g',
            edad: '30',
            telefono: '2'
        }, {
            nombre: 'x',
            edad: '30',
            telefono: '3'
        }
    ]
    // exercise
    const result = armarListado(baseConPersonasAdultas)

    // assertion
    assert.deepStrictEqual(result, ['1', '2', '3'])
}

siLaBaseEstaVaciaGeneraUnListadoVacio()
siLaBaseTieneUnaPersonaAdultaDevuelveSuTelefono()
siLaBaseTieneVariasPersonasAdultasDevuelveSusTelefonos()