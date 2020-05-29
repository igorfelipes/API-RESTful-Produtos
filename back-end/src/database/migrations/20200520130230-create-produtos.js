'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('Produtos', { 
        id: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },

        idCategoria:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: 'Categorias',
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }
        },
        descricao:{
          type: Sequelize.TEXT,
          allowNull: false
        }
        
      });

  },

  down: (queryInterface) => {

      return queryInterface.dropTable('Produtos');
  
  }
};
