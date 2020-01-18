const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Cadastro = require('../model/cadastro')
const Material = require('../model/material')

const connection = new Sequelize(dbConfig)

Material.init(connection) 
Cadastro.init(connection) 
module.exports = connection 