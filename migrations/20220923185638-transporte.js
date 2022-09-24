'use strict';

export async function up(queryInterface, Sequelize) {
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
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('transporte');
}
