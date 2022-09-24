'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('grupo_usuario', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    id_usuario: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: 'usuario',
      referencesKey: 'id',
      onDelete: 'CASCADE'
    },
    id_grupo: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: 'usuario',
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
  await queryInterface.dropTable('grupo_usuario');
}
