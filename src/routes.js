const express = require('express')
const CadastroController = require('./controllers/Cadastro-controller')
const routes = express.Router()
/*
routes.get('/', (req, res) => {
    return res.json({hello: "Olá"})
})
*/
routes.post('/cadastro', CadastroController.store) 
module.exports = routes