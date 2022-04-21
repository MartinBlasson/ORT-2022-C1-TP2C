const carreras = [
    {
        "nombre": "Analista de sistemas"
    },
    {
        "nombre": "Biotecnología"
    }
]

export function obtenerCarreras() {
    return carreras
}

export function agregarCarrera(carrera) {
    carrera.id = 1
    carreras.push(carrera)
    return carrera
}