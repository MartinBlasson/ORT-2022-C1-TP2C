export default class Cliente {
    constructor(nombre, dni, cargo) {
        this.setNombre(nombre)
        this.setDni(dni)
        this.setCargo(cargo)
    }

    setNombre(nombre) {
        if (!nombre) {
            throw new Error('falta el campo requerido: "nombre"')
        } else {
            this.nombre = nombre
        }
    }

    setDni(dni) {
        if (!dni) {
            throw new Error('falta el campo requerido: "dni"')
        } else {
            this.dni = dni
        }
    }

    setCargo(cargo) {
        if (!cargo) {
            throw new Error('falta el campo requerido: "cargo"')
        } else {
            this.cargo = cargo
        }
    }

}
