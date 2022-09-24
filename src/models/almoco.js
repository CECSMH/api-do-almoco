const Almoco = (sequelize, DataTypes) => sequelize.define('almoco', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    criador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dt_inicio: {
        type: DataTypes.DATE,
        allowNull: true
    },
    dt_fim: {
        type: DataTypes.DATE,
        allowNull: true
    }
});


export default Almoco;

