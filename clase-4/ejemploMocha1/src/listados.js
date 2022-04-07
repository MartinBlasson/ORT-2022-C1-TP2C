const EDAD_MINIMA_ADMITIDA = 18

function esMayorDeEdad(persona) {
    return persona.edad >= EDAD_MINIMA_ADMITIDA
}

export function armarListado(base) {
    const result = []
    for (const p of base) {
        if (esMayorDeEdad(p)) {
            result.push(p.telefono)
        }
    }
    return result

    // return base.filter(esMayorDeEdad).map(p => p.telefono)
}