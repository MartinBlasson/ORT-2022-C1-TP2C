export default class ClienteManager {
    constructor() {
        this.clientes = []
    }

    agregar(cliente) {
        this.clientes.push(cliente)
    }

    mostrarClientes() {
        console.log(this.clientes)
    }

    mostrarCliente(pos) {
        console.log(this.clientes[pos])
    }
}