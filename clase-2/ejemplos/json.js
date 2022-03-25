// serializacion/deserializacion:
// transformar en texto (caracteres) un dato en memoria.

// JSON:
// representar objetos de javascript como texto

const persona = { nombre: 'pepe', apellido: 'lopez' }

// console.log(persona.nombre)
// console.log(persona.length) // no se puede

const personaEnJson = '{ "nombre": "pepe", "apellido": "lopez" }'
// console.log(personaEnJson.nombre) // no se puede

// console.log(personaEnJson.length)

console.log(JSON.stringify(persona))

console.log(JSON.parse(personaEnJson))
