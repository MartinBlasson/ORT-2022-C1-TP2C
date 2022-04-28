import { obtenerNuevoId } from './ids.js'

const carreras = []

function copiarCarrera(carrera) {
    return ({ id: carrera.id, nombre: carrera.nombre, temas: carrera.temas })
}

function copiarCarreras(carreras) {
    return carreras.map(copiarCarrera)
}

function crearCarrera(datos) {
    if (!datos.nombre) {
        throw new Error('el campo nombre es obligatorio')
    }

    if (!datos.temas) {
        throw new Error('el campo temas es obligatorio')
    }

    const carrera = {
        id: obtenerNuevoId('carrera'),
        nombre: datos.nombre,
        temas: datos.temas,
    }

    return carrera
}

export function obtenerCarreras() {
    return copiarCarreras(carreras)
}

export function agregarCarrera(datosCarrera) {
    const carrera = crearCarrera(datosCarrera)
    carreras.push(carrera)
    return carrera
}

export function borrarCarreras() {
    while (carreras.length > 0) {
        carreras.pop()
    }
}

export function obtenerCarrerasSegunTema(tema) {
    const buscadas = carreras.filter(c => c.temas.includes(tema))
    return copiarCarreras(buscadas)
}

export function obtenerCarreraSegunId(id) {
    const buscada = carreras.find(c => c.id === id)
    if (buscada) {
        return copiarCarrera(buscada)
    } else {
        throw new Error('carrera no encontrada')
    }
}

export function borrarCarreraSegunId(id) {
    const indiceBuscado = carreras.findIndex(c => c.id === id)
    if (indiceBuscado === -1) {
        throw new Error('carrera no encontrada')
    } else {
        carreras.splice(indiceBuscado, 1)
    }
}

export function reemplazarCarrera(id, datosCarrera) {
    const indiceBuscado = carreras.findIndex(c => c.id === id)
    if (indiceBuscado === -1) {
        throw new Error('carrera no encontrada')
    } else {
        const carrera = crearCarrera(datosCarrera)
        carrera.id = id
        carreras[indiceBuscado] = carrera
    }
}