const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 

let db = [

    { '1': {nome:'Cliente 1', idade: '20'}},
    { '2': {nome:'Cliente 3', idade: '22'}},
    { '3': {nome:'Cliente 3', idade: '23'}}

]

// Buscar Dados
app.get('/', (req, res) =>{
    return res.json({db})
})

// Inserir dados
app.post('/add' , (req, res) =>{
    const body = req.body

    if(!body){
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)

})




app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})