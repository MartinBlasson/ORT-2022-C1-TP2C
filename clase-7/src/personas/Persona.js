import { obtenerNuevoId } from '../compartidos/ids.js'

function lanzarErrorDeValidacionDeDatos(campo) {
    const error = new Error('error de validacion de datos')
    error.tipo = 'DATA_VALIDATION'
    error.campo = campo
    throw error
}

export function crearPersona(datos) {
    if (!datos.dni) throw new Error('dni es un campo obligatorio')
    if (isNaN(Number(datos.dni))) lanzarErrorDeValidacionDeDatos('dni')
    return {
        id: obtenerNuevoId('persona'),
        nombre: datos.nombre,
        dni: datos.dni
    }
}