const express = require('express')
const moment = require('moment')
const routes = express.Router()

let db = [


]

// Buscar Dados
routes.get('/', (req, res) =>{
    return res.json({db})
})

// Inserir dados
routes.post('/api/v1/classes/' , (req, res) =>{
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    validBody(body)

    db.push(body)
    return res.json(body)

})

const validBody = (body) => {
    const {ano, semestre, dias_da_sem} = body
    
    if(ano == undefined || semestre == undefined || dias_da_sem == undefined){
        return res.status(404).end
    }
}

module.exports = routes