const Grupos = (sequelize, DataTypes) => sequelize.define('grupos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    lider: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    taxa_motorista_pp: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
});

export default Grupos;
