const {Model, DataTypes} = require('sequelize')

class Reserva extends Model {
    static init(sequelize) {
        super.init({
            data_reserva: DataTypes.DATETIME,
            data_uso: DataTypes.DATETIME,
        }, {
            sequelize 
        })
    }
}

module.exports = Reserva