import { crearCliente } from './Cliente.js'
import { crearVenta } from './Venta.js'

const cliente1 = crearCliente('pepe', '123', 'vendedor')
console.log(cliente1)

// falla!
try {
    const cliente2 = crearCliente('pepe')
    console.log(cliente2)
} catch (error) {
    console.log(error.message)
}

//=================================

const venta1 = crearVenta('123', 456, Date.now())
console.log(venta1)

// falla!
try {
    const venta2 = crearVenta('456', 789)
    console.log(venta2)
} catch (error) {
    console.log(error.message)
}