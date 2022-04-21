const o1 = {
    id: 1,
    nombre: "Analista de sistemas"
}

const o2 = {
    id: 2,
    nombre: "Biotecnología"
}

const carreras = [o1, o2]

function crearCarrera(datos) {
    const carrera = {}

    if (!datos.nombre) {
        throw new Error('el campo nombre es obligatorio')
    }
    carrera.nombre = datos.nombre

    carrera.id = 3

    return carrera
}

export function obtenerCarreras() {
    return carreras.map(e => ({ id: e.id, nombre: e.nombre }))
}

export function agregarCarrera(datosCarrera) {
    const carrera = crearCarrera(datosCarrera)
    carreras.push(carrera)
    return carrera
}