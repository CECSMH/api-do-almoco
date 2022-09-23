'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('almoco', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      criador: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      dt_inicio: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      dt_fim: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('almoco');
  }
};
