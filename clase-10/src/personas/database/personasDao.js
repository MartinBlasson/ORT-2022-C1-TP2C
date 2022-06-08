const personas = []

export function guardarPersona(persona) {
    const indiceBuscado = personas.findIndex(c => c.id === persona.id)
    if (indiceBuscado === -1) {
        personas.push(persona)
    } else {
        personas[indiceBuscado] = persona
    }
}

export function recuperarPersona(id) {
    const buscada = personas.find(c => c.id === id)
    if (buscada) {
        return copiarPersona(buscada)
    } else {
        throw new Error('persona no encontrada')
    }
}

export function recuperarPersonas() {
    return copiarPersonas(personas)
}

export function eliminarPersona(id) {
    const indiceBuscado = personas.findIndex(c => c.id === id)
    if (indiceBuscado === -1) {
        throw new Error('persona no encontrada')
    } else {
        personas.splice(indiceBuscado, 1)
    }
}

export function eliminarPersonas() {
    while (personas.length > 0) {
        personas.pop()
    }
}

function copiarPersona(persona) {
    return ({ id: persona.id, nombre: persona.nombre, dni: persona.dni })
}

function copiarPersonas(personas) {
    return personas.map(copiarPersona)
}