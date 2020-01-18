'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //dizer o que a migrations vai realizar na db
    return queryInterface.createTable('cadastro', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      email: {
        type: Sequelize.STRING,
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
   return queryInterface.dropTable('cadastro') 
  }
};
