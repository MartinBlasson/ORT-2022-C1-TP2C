import assert from 'assert'
import axios from 'axios'
import { conectar, desconectar } from '../src/servidor/servidor.js'

import {
    obtenerCarreras,
    agregarCarrera,
    borrarCarreras, obtenerCarreraSegunId
} from '../src/carreras/carreras.js'

import { obtenerPersonas } from '../src/personas/personas.js'

const carreraDePrueba1 = {
    nombre: "Analista de sistemas",
    temas: ["programacion", "ingenieria"]
}

const carreraDePrueba2 = {
    nombre: "Biotecnología",
    temas: ["ingenieria"]
}

describe('servidor de pruebas', () => {
    let urlCarreras
    let urlPersonas

    before(async () => {
        const port = await conectar()
        urlCarreras = `http://localhost:${port}/api/carreras`
        urlPersonas = `http://localhost:${port}/api/personas`
    })

    after(async () => {
        await desconectar()
    })

    beforeEach(() => {
        borrarCarreras()
    })

    afterEach(() => {
        borrarCarreras()
    })

    describe('el servidor esta escuchando', () => {
        describe('Personas', () => {
            describe('al intentar agregar una nueva', () => {
                describe('si los datos válidos', () => {
                    it('la crea, la guarda, y la devuelve', async () => {

                        const personasAntes = obtenerPersonas()

                        const datosPersona = {
                            nombre: 'marian',
                            dni: '123456'
                        }

                        const { data: personaAgregada, status } = await axios.post(urlPersonas, datosPersona)
                        assert.strictEqual(status, 201)

                        const personasDespues = obtenerPersonas()

                        const personaAgregadaEsperada = { ...datosPersona, id: personaAgregada.id }
                        assert.deepStrictEqual(personasDespues, personasAntes.concat(personaAgregadaEsperada))
                    })
                })

                describe('si el dni no es numerico', () => {
                    it('no agrega nada y devuelve un error', async () => {
                        const personasAntes = obtenerPersonas()
                        const datosPersona = {
                            nombre: "josefa",
                            dni: 'abc'
                        }

                        await assert.rejects(
                            axios.post(urlPersonas, datosPersona),
                            error => {
                                assert.strictEqual(error.response.status, 400)
                                return true
                            }
                        )

                        const personasDespues = obtenerPersonas()
                        assert.deepStrictEqual(personasDespues, personasAntes)
                    })
                })
            })
        })

        describe('Carreras', () => {
            describe('al intentar obtener todas', () => {
                it('devuelve un array con carreras', async () => {

                    await agregarCarrera(carreraDePrueba1)
                    await agregarCarrera(carreraDePrueba2)

                    const { data: carrerasObtenidas, status } = await axios.get(urlCarreras)
                    assert.strictEqual(status, 200)
                    const carrerasReales = obtenerCarreras()
                    assert.deepStrictEqual(carrerasObtenidas, carrerasReales)
                })
            })

            describe('al pedirle las carreras relacionadas con programacion', () => {
                it('devuelve un array con carreras relacionadas con programacion', async () => {

                    await agregarCarrera(carreraDePrueba1)
                    await agregarCarrera(carreraDePrueba2)

                    let carrerasObtenidas
                    const { data, status } = await axios.get(urlCarreras, { params: { tema: 'programacion' } })
                    assert.strictEqual(status, 200)
                    carrerasObtenidas = data

                    const todas = obtenerCarreras()
                    const carrerasEsperadas = todas.filter(c => c.temas.includes('programacion'))
                    assert.deepStrictEqual(carrerasObtenidas, carrerasEsperadas)
                })
            })

            describe('al pedirle una carrera especifica, segun su identificador', () => {
                it('devuelve esa carrera', async () => {

                    const carreraAgregada1 = await agregarCarrera(carreraDePrueba1)

                    let carreraObtenida
                    const { data, status } = await axios.get(urlCarreras + '/' + carreraAgregada1.id)
                    assert.strictEqual(status, 200)
                    carreraObtenida = data

                    assert.deepStrictEqual(carreraObtenida, carreraAgregada1)
                })
            })

            describe('al pedirle una carrera que no existe', () => {
                it('lanza un error 404', async () => {
                    await assert.rejects(
                        axios.get(urlCarreras + '/unIdQueNoExiste'),
                        error => {
                            assert.strictEqual(error.response.status, 404)
                            return true
                        }
                    )
                })
            })

            describe('al mandarle datos válidos de una carrera', () => {
                it('crea y agrega esa carrera a las demas existentes', async () => {
                    const carrerasAntes = obtenerCarreras()
                    const carrera = {
                        nombre: "Ciencia de datos",
                        temas: ["ciencia", "politica"]
                    }
                    const { data: carreraAgregada, status } = await axios.post(urlCarreras, carrera)
                    assert.strictEqual(status, 201)

                    const carrerasDespues = obtenerCarreras()
                    assert.strictEqual(carrerasDespues.length, carrerasAntes.length + 1)

                    const carreraAgregadaEsperada = { ...carrera, id: carreraAgregada.id }
                    assert.deepStrictEqual(carrerasDespues, carrerasAntes.concat(carreraAgregadaEsperada))
                })
            })

            describe('al mandarle una carrera mal formateada', () => {
                it('no agrega nada y devuelve un error', async () => {
                    const carrerasAntes = obtenerCarreras()
                    const carrera = {
                        titulo: "Ciencia de datos"
                    }

                    await assert.rejects(
                        axios.post(urlCarreras, carrera),
                        error => {
                            assert.strictEqual(error.response.status, 400)
                            return true
                        }
                    )

                    const carrerasDespues = obtenerCarreras()
                    assert.deepStrictEqual(carrerasDespues, carrerasAntes)
                })
            })

            describe('al pedirle que borre una carrera especifica, segun su identificador', () => {
                it('borra esa carrera y no devuelve nada', async () => {

                    const carreraAgregada1 = await agregarCarrera(carreraDePrueba1)

                    const { status } = await axios.delete(urlCarreras + '/' + carreraAgregada1.id)
                    assert.strictEqual(status, 204)

                    const carrerasDespues = obtenerCarreras()
                    assert.ok(carrerasDespues.every(c => c.id !== carreraAgregada1.id))
                })
            })

            describe('al pedirle una carrera que no existe', () => {
                it('lanza un error 404', async () => {
                    await assert.rejects(
                        axios.delete(urlCarreras + '/unIdQueNoExiste'),
                        error => {
                            assert.strictEqual(error.response.status, 404)
                            return true
                        }
                    )
                })
            })

            describe('al mandarle una carrera valida y un identificador de carrera', () => {
                it('reemplaza la preexistente por la nueva', async () => {
                    const carreraAgregada1 = await agregarCarrera(carreraDePrueba1)

                    const nuevoNombre = 'Analista de Sistemas'
                    const datosActualizados = { ...carreraAgregada1, nombre: nuevoNombre }

                    const { status } = await axios.put(urlCarreras + '/' + carreraAgregada1.id, datosActualizados)
                    assert.strictEqual(status, 200)

                    const carreraBuscada = obtenerCarreraSegunId(carreraAgregada1.id)
                    assert.deepStrictEqual(carreraBuscada, datosActualizados)
                })
            })
        })
    })
})
