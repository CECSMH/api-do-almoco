import { Sequelize } from 'sequelize';
import { define } from '../db.js';

const Grupos = define('grupos', {
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
    }
})

export default Grupos;