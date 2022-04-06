export function crearVenta(dniCliente, monto, fecha) {

    if (!dniCliente) {
        throw new Error('falta el campo requerido: "dniCliente"')
    }

    if (!monto) {
        throw new Error('falta el campo requerido: "monto"')
    }

    if (!fecha) {
        throw new Error('falta el campo requerido: "fecha"')
    }

    return { dniCliente, monto, fecha }
}
