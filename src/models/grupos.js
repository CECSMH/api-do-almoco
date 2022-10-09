const Grupos = (sequelize, DataTypes) => {
    const Model = sequelize.define('grupos', {
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
        lider_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        taxa_motorista_pp: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        vlr_almoco_pp: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario, { foreignkey: 'lider_id', targetKey: 'id' });
    };

    return Model;
};

export default Grupos;
