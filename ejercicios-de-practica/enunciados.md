# Ejercicios

## Clases

1. Crear y exportar (default) una clase Cliente, con nombre, dni, y cargo.
Un cliente recibe todos sus datos al momento de ser construido. De lo contrario, lanza un error (throw new Error('campo requerido')). Ejemplo:

    ```
    Cliente {
        nombre: 'pepe',
        dni: '123',
        cargo: 'vendedor'
    }
    ```
2. Crear y exportar (default) una clase Venta, con dni del cliente que realiza la compra, monto en pesos de la venta realizada, y fecha de realizacion (Date.now()). Una venta recibe todos sus datos al momento de ser construida. De lo contrario, lanza un error (throw new Error('campo requerido')). Ejemplo:

    ```
    Venta {
        dniCliente: '123',
        monto: 12345,
        fecha: 1648082944852
    }
    ```

> Exportar ambas clases en forma _default_. Asegurarse de que se exporten correctamente, probando importarlas desde otro archivo de pruebas. En ese archivos de pruebas, crear una instancia de cada una con datos correctos, y crear otra instancia con datos incorrectos, asegurandose de que falle en el segundo caso.

## Funciones

### Funciones Constructoras

3. En forma análoga a lo realizado en los puntos anteriores, definir una función crearCliente que reciba un nombre, un dni, y un cargo, cree y devuelva un objeto tipo diccionario, con todos esos campos. Si falta alguno de los datos recibidos al momento de la invocación, se lanza un error (throw new Error('campo requerido')). Ejemplo:

    ```
    {
        nombre: 'pepe',
        dni: '123',
        cargo: 'vendedor'
    }
    ```

4. En forma análoga a lo realizado en los puntos anteriores, definir una función crearVenta que reciba un dni, un monto, y una fecha, cree y devuelva un objeto tipo diccionario, con todos esos campos. Si falta alguno de los datos recibidos al momento de la invocación, se lanza un error (throw new Error('campo requerido')). Ejemplo:

    ```
    {
        dniCliente: '123',
        monto: 12345,
        fecha: 1648082944852
    }
    ```

> Exportar ambas funciones (export normal, no _default_). Asegurarse de que se exporten correctamente, probando importarlas desde otro archivo de pruebas. En ese archivos de pruebas, invocar ambas funciones, una vez con datos correctos, y otra con datos incorrectos, asegurandose de que fallen en el segundo caso.

### Tratamiento de colecciones

5. Definir una función que reciba una coleccion de clientes, la recorra, y devuelva una colección que contenga únicamente los nombres de cada cliente. Ejemplo:

    ```
    [{
        nombre: 'pepe',
        dni: '123',
        cargo: 'vendedor'
    }]

    ==>

    ['pepe']
    ```

> Propuesta: utilizar el método _map_ de Array.

6. Definir una función que reciba una coleccion de clientes, la recorra, y devuelva otra colección que contenga únicamente aquellos clientes cuyo cargo sea 'contadora'. Ejemplo:

    ```
    [{
        nombre: 'pepe',
        dni: '123',
        cargo: 'vendedor'
    },
    {
        nombre: 'doris',
        dni: '456',
        cargo: 'contadora'
    }]

    ==>

    [{
        nombre: 'doris',
        dni: '456',
        cargo: 'contadora'
    }]    ```

> Propuesta: utilizar el método _filter_ de Array.

7. Definir una función que reciba una coleccion de clientes, la recorra, y devuelva un objeto con un resumen de los distintos cargos, y la cantidad de personas de cada cargo. Ejemplo:

    ```
    ==>

    {
        jefe: 1,
        vendedor: 10,
        atencionAlCliente: 3
    }
    ```
> Propuesta: utilizar el método _reduce_ de Array.