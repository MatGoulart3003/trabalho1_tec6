const express = require('express')
const routes = express.Router()

let db = [

   {ano:'2022', sem: '4', dia:'1'}
    

]

// Buscar Dados
routes.get('/', (req, res) =>{
    return res.json({db})
})

// Inserir dados
routes.post('/api/v1/classes/:ano/:sem/:dia' , (req, res) =>{
    const body = req.body
    const ano = req.params.ano
    const sem = req.params.sem
    const dia = req.params.dia

    if(!body){
        return res.status(400).end()
    }
    body.ano = ano
    body.sem = sem
    body.dia = dia
    
    db.push(body)
    return res.json(body)

})

routes.delete('/:id', (req,res) =>{
    const id = req.params.id

    let newDB = db.filter(item =>{
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes