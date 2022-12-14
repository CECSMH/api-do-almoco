'use strict';

export async function up(queryInterface, Sequelize) {
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
    lider: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    taxa_motorista_pp: {
      type: Sequelize.DataTypes.DECIMAL,
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
  await queryInterface.dropTable('grupos');
}
