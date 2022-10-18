const Veiculo = (sequelize, DataTypes) => {
    const Model = sequelize.define('veiculo', {
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
        taxa_por_ocupante: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: 0
        },
        qtd_lugares: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario, { foreignkey: 'id_usuario', targetKey: 'id' });
    };

    return Model;
}

export default Veiculo;