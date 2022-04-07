import assert from 'assert'
import { armarListado } from '../src/listados.js'

describe('armar listado', () => {

    describe('si la base esta vacia', () => {
        it('genera un listado vacio', () => {
            const baseVacia = []
            const result = armarListado(baseVacia)
            assert.deepStrictEqual(result, [])
        })
    })

    describe('si la base tiene una persona adulta', () => {
        it('devuelve su telefono', () => {
            const baseConUnaPersonaAdulta = [
                {
                    nombre: 'c',
                    edad: '30',
                    telefono: '1'
                }
            ]
            const result = armarListado(baseConUnaPersonaAdulta)
            assert.deepStrictEqual(result, ['1'])
        })
    })

    describe('si la base tiene varias personas adultas', () => {
        it('devuelve sus telefonos', () => {
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
        })
    })

    describe('si la base tiene menores de edad', () => {
        it('no los tiene en cuenta', () => {
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
        })
    })
})
