'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transporte', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      qtd_lugares: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transporte');
  }
};
