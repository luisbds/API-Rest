const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Cadastro = require('../model/cadastro')
const connection = new Sequelize(dbConfig)

Cadastro.init(connection) 
module.exports = connection 