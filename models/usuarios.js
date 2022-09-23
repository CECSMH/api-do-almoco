import { Sequelize } from 'sequelize';
import { define } from '../db';

const Usuario = define('usuario', {
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
    email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    pix: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: true
    },
    saldo: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: 0
    }
})

export default Usuario;