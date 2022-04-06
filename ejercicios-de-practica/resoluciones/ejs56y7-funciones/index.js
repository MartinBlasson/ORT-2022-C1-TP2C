const clientes = [
    {
        nombre: 'pepe',
        dni: '123',
        cargo: 'vendedor'
    },
    {
        nombre: 'juana',
        dni: '456',
        cargo: 'vendedor'
    },
    {
        nombre: 'doris',
        dni: '789',
        cargo: 'promotor'
    },
    {
        nombre: 'ruby',
        dni: '158',
        cargo: 'atencion'
    },
]

console.log(clientes.filter(c => c.cargo === 'vendedor'))

console.log(clientes.map(c => c.nombre))

console.log(clientes.reduce((acum, c) => {
    if (!acum[c.cargo]) {
        acum[c.cargo] = 0
    }
    acum[c.cargo]++
    return acum
}, {}))
