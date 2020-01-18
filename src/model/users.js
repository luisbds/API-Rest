const {Model, DataTypes} = require('sequelize')

class Cadastro extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize 
        })
    }
}

module.exports = Cadastro