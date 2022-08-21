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
        return res.status(400).send("Requisição com Erro")
    }
    if (validBody(body)){
        console.log("entrei")
        return res.status(400).send("Requisição com Erro")
    }

    db.push(body)
    return res.json(body)

})

const validBody = (body) => {
    const {ano, semestre, dias_da_sem} = body
    let isntValid = true
   
    if(ano === undefined || semestre === undefined || dias_da_sem === undefined){        
         return isntValid
    }
    if(ano < 2020 || semestre > 2 || semestre < 1){
        return isntValid
    }
    if(dias_da_sem.length < 1 || dias_da_sem.length > 5){
        return isntValid
    }if(dias_da_sem){
        for (let i = 0; i < dias_da_sem.length; i++) {
            let dia = dias_da_sem[i]
            if (dia < 1 || dia > 5){
                return isntValid
            }            
        }
        
    }
           
}


module.exports = routes