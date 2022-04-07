import express from 'express'

const app = express()

app.get('/carreras', (req, res) => {

    const carreras = [
        {
            "nombre": "Analista de sistemas"
        },
        {
            "nombre": "Biotecnología"
        }
    ]

    res.json(carreras)
})

app.get('/saludos', (req, res) => {

    res.json({ frase: "que onda, todo bien?" })
})

const server = app.listen(3000, () => {
    console.log(`servidor inicializado en puerto ${server.address().port}`)
})