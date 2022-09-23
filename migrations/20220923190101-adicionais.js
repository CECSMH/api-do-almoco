'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transporte', {
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
      id_grupo: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
      },
      id_usuario:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      preco: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('adcionais');
  }
};
