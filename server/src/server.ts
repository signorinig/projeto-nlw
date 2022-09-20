
import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Anúncio 1', valor: '999,99'},
        {id: 2, name: 'Anúncio 2', valor: '500,99'},
        {id: 3, name: 'Anúncio 3', valor: '300,99'},
        {id: 4, name: 'Anúncio 4', valor: '300'},
        {id: 5, name: 'Anúncio 5', valor: '400'},
        {id: 6, name: 'Anúncio 6', valor: '200'},
    ])
})

app.listen(3333)