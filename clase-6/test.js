const carreraDePrueba1 = {
    id: 1,
    nombre: "Analista de sistemas",
    temas: ["programacion", "ingenieria"]
}

const carreraDePrueba2 = {
    id: 2,
    nombre: "Biotecnología",
    temas: ["ingenieria"]
}

const carreras = [carreraDePrueba1, carreraDePrueba2]

console.log(carreras.filter(c => c.temas.includes('programacion')))