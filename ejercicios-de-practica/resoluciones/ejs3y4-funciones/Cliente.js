export function crearCliente(nombre, dni, cargo) {

    if (!nombre) {
        throw new Error('falta el campo requerido: "nombre"')
    }

    if (!dni) {
        throw new Error('falta el campo requerido: "dni"')
    }

    if (!cargo) {
        throw new Error('falta el campo requerido: "cargo"')
    }

    return { nombre, dni, cargo }
}
