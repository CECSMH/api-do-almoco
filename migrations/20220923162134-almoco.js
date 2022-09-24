'use strict';

export async function up(queryInterface, Sequelize) {
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
  await queryInterface.dropTable('almoco');
}
