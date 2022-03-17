import ClienteManager from './ClienteManager.js'
import Cliente from './Cliente.js'

const clienteManager = new ClienteManager()

let cliente = new Cliente('mariano', 'aquino', '32323232', 35)

clienteManager.agregar(cliente)

cliente = new Cliente('pepe', 'popo', '32323232', 20)

clienteManager.agregar(cliente)

clienteManager.mostrarClientes()

clienteManager.mostrarCliente(100)
