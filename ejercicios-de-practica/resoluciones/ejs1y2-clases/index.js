import Cliente from './Cliente.js'
import Venta from './Venta.js'

const cliente1 = new Cliente('pepe', '123', 'vendedor')
console.log(cliente1)

// falla!
try {
    const cliente2 = new Cliente('pepe')
    console.log(cliente2)
} catch (error) {
    console.log(error.message)
}

//=================================

const venta1 = new Venta('123', 456, Date.now())
console.log(venta1)

// falla!
try {
    const venta2 = new Venta('456', 789)
    console.log(venta2)
} catch (error) {
    console.log(error.message)
}