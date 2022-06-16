import { obtenerNuevoId } from '../../shared/ids/Id.js'
import { crearErrorDeDatosFaltantes } from '../../shared/errors/models/ErrorDeDatosFaltantes.js'
import { crearErrorDeNumerosMalFormateados } from '../../shared/errors/models/ErrorDeNumerosMalFormateados.js'


export function crearPersona(datos) {
    if (!datos.dni) throw crearErrorDeDatosFaltantes('dni')
    if (isNaN(Number(datos.dni))) throw crearErrorDeNumerosMalFormateados('dni')
    return {
        id: obtenerNuevoId('persona'),
        nombre: datos.nombre,
        dni: datos.dni
    }
}