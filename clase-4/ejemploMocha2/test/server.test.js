import assert from 'assert'
import axios from 'axios'

describe('servidor de pruebas', () => {
    describe('el servidor esta escuchando', () => {
        describe('al pedirle las carreras', () => {
            it('devuelve un array con carreras', async () => {
                const response = await axios.get('http://localhost:3000/carreras')
                const { data } = response
                assert.strictEqual(data.length, 2)
            })
        })
    })
})
