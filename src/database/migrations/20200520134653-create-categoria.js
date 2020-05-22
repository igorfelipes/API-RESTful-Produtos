'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('Categorias', { 
        id: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        
        categoria:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        }
      });

  },

  down: (queryInterface) => {

      return queryInterface.dropTable('Categorias');
  
  }
};

