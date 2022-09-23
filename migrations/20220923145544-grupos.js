'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('grupos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
      },
      lider:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      taxa_motorista_pp:{ 
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('grupos');
  }
};
