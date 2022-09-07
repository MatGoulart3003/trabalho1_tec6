const express = require('express')
const moment = require('moment')
const routes = express.Router()
const mensagemErro = "Requisição com Erro"

let db = []

// Buscar Dados
routes.get('/', (req, res) => {
    return res.json({ db })
})

// Inserir dados
routes.post('/api/v1/classes/', (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(404).send(mensagemErro)
    }
    if (validBody(body)) {
        return res.status(404).send(mensagemErro)
    }

    const { ano, semestre, dias_da_sem } = body

    if (semestre === 1) {

        let mesesSem = 4

        dias_da_sem.forEach(diaString => {
        
            let diaNumber = Number(diaString)
            validDay(ano,2, diaNumber, mesesSem)

    });

    } else {

        let mesesSem = 3
        dias_da_sem.forEach(diaString =>{
            let diaNumber = Number(diaString)
            validDay(ano,8, diaNumber, mesesSem)
        })
        
    }

    db.push(body)
    return res.json(body)

})

    const validBody = (body) => {
    const { ano, semestre, dias_da_sem } = body
    let isntValid = true


    if (new Set(dias_da_sem).size !== dias_da_sem.length) {
        return isntValid
    }

    if (ano === undefined || semestre === undefined || dias_da_sem === undefined) {
        return isntValid
    }
    if (ano > 2029 || ano < 2020 || semestre > 2 || semestre < 1) {
        return isntValid
    }
    if (!Array.isArray(dias_da_sem)) {
        return isntValid
    }
    if (dias_da_sem.length < 1 || dias_da_sem.length > 5) {
        return isntValid
    } if (dias_da_sem) {
        for (let i = 0; i < dias_da_sem.length; i++) {
            let dia = dias_da_sem[i]
            if (dia < 1 || dia > 5) {
                return isntValid
            }
        }

    }

}

const validDay = (ano, mes , diaNumber, mesesSem) => {

    const firstDay = moment(`01/${mes}/${ano}`, "DD/MM/YYYY").get('dayOfYear')
    const lastDay = moment(`30/${mes+mesesSem}/${ano}`, "DD/MM/YYYY").get('dayOfYear')
    console.log(`first day é ${firstDay} e lastDay é ${lastDay}`)

}


module.exports = routes