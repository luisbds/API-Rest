'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //dizer o que a migrations vai realizar na db
    return queryInterface.createTable('reserva', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeUsu_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'cadastro', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tipoRes_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'material', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_reserva: {
        type: Sequelize.DATETIME,
        allowNull: false,
      },
      data_uso: {
        type: Sequelize.DATETIME,
        allowNull: false, 
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
   //se der alguma coisa errada o que tenho que fazer
   return queryInterface.dropTable('reserva') 
  }
};
