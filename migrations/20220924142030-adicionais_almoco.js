'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('adicionais_almoco', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    id_adicionais: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: 'adicionais',
      referencesKey: 'id',
      onDelete: 'CASCADE'
    },
    id_almoco: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: 'almoco',
      referencesKey: 'id',
      onDelete: 'CASCADE'
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
  await queryInterface.dropTable('adicionais_almoco');
}
