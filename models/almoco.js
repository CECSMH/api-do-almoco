
import { define } from '../db.js';

const Almoco = define('almoco', {
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
});


export default Almoco;