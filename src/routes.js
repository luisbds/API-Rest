const express = require('express')
const CadastroController = require('./controllers/Cadastro-controller')
const MaterialController = require('./controllers/Material-controller')
const routes = express.Router()
/*
routes.get('/', (req, res) => {
    return res.json({hello: "Olá"})
})
*/
routes.post('/material', MaterialController.store) 
routes.post('/cadastro', CadastroController.store) 
module.exports = routes