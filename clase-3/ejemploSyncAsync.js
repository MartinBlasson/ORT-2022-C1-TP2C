// 11111111111111111111111111111111111111111111111
// 22222222222222222222222
// 33333333

// 1111111111111111111111111111111111111111111111[1] 2222222222222222222222[2] 3333333[3]

// 1111111111111111111111111111111111111111111111[3]
//       2222222222222222222222[2]
//            3333333[1]


// (1) registrarme al sitio

// (2) elegir el producto

// (3) comprar

// (4) cerrar sesion

//===============================================

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

//===============================================

// console.logNoBlock(111111111111111111111111111111111111111111111111111111111111)
// console.logNoBlock(222222222222222222222222222222222222222222)
// console.logNoBlock(33333333333333333333333333)
// console.logNoBlock(444444444)

// 4444444 33333333333333333333 222222222222222222222222222222222 11111111111111111111111111111111111111111

//=================================================

// fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()).then(obj => console.log(obj))


async function obtenerObjetoRemoto(url) {
    const res = await fetch(url)
    const obj = await res.json()
    return obj
}

async function buscarYMostrarIdDePost(numero) {
    const result = await obtenerObjetoRemoto(`https://jsonplaceholder.typicode.com/posts/${numero}`)
    console.log(result.id)
}

await buscarYMostrarIdDePost(1)
buscarYMostrarIdDePost(2)



// async function buscar(url, fnDespues) {
//     const res = await fetch(url)
//     const obj = await res.json()
//     fnDespues(obj)
// }

// function mostrar() {
//     buscar("https://jsonplaceholder.typicode.com/posts/1", (obj) => {
//         console.log(obj)
//     })
// }

// function gritar() {
//     buscar("https://jsonplaceholder.typicode.com/posts/1", (obj) => {
//         console.log('!!!' + obj)
//     })
// }
