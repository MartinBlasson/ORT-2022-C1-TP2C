export default class Venta {
    constructor(dniCliente, monto, fecha) {
        this.setDniCliente(dniCliente)
        this.setMonto(monto)
        this.setFecha(fecha)
    }

    setDniCliente(dniCliente) {
        if (!dniCliente) {
            throw new Error('falta el campo requerido: "dniCliente"')
        } else {
            this.dniCliente = dniCliente
        }
    }

    setMonto(monto) {
        if (!monto) {
            throw new Error('falta el campo requerido: "monto"')
        } else {
            this.monto = monto
        }
    }

    setFecha(fecha) {
        if (!fecha) {
            throw new Error('falta el campo requerido: "fecha"')
        } else {
            this.fecha = fecha
        }
    }

}
