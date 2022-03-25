# ejercicios

1. crear una clase Cliente, con nombre, dni, y cargo.
un cliente recibe todos sus datos al momento de ser construido. de lo contrario, lanza un error (throw new Error('campo requerido')). Ejemplo:

```
Cliente {
    nombre: 'pepe',
    dni: '123',
    cargo: 'vendedor'
}
```
2. crear una clase Venta, con dni del cliente que realiza la compra, monto en pesos de la venta realizada, y fecha de realizacion (Date.now())

```
Venta {
    dniCliente: '123',
    monto: 12345,
    fecha: 1648082944852
}
```

3. crear una funcion que reciba una coleccion de clientes, la recorra, y devuelva un objeto con un resumen de los distintos cargos, y la cantidad de personas de cada cargo. ejemplo:

```
{
    jefe: 1,
    vendedor: 10,
    atencionAlCliente: 3
}
```