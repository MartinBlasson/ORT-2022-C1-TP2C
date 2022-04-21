import assert from 'assert'
import axios from 'axios'
import { conectar, desconectar } from '../src/servidor.js'

import { obtenerCarreras } from '../src/carreras.js'

describe('servidor de pruebas', () => {

    before(async () => {
        await conectar()
    })

    after(async () => {
        await desconectar()
    })

    describe('el servidor esta escuchando', () => {
        describe('al pedirle las carreras', () => {
            it('devuelve un array con carreras', async () => {
                const { data: carrerasObtenidas, status } = await axios.get('http://localhost:3000/carreras')
                assert.strictEqual(status, 200)
                const carrerasReales = obtenerCarreras()
                assert.deepStrictEqual(carrerasObtenidas, carrerasReales)
            })
        })

        describe('al mandarle una carrera carrera', () => {
            it('la agrega a las demas existentes', async () => {
                const carrerasAntes = obtenerCarreras()
                const carrera = {
                    "nombre": "Ciencia de datos"
                }
                const { status } = await axios.post('http://localhost:3000/carreras', carrera)
                assert.strictEqual(status, 201)
                // const carrerasDespues = obtenerCarreras()
                // assert.strictEqual(carrerasDespues.length, carrerasAntes.length + 1)
                // assert.ok(carrerasDespues.)
            })
        })
    })
})
