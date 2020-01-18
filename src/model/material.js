const {Model, DataTypes} = require('sequelize')

class Material extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.STRING,
            obs: DataTypes.STRING,
        }, {
            sequelize 
        })
    }
}

module.exports = Material