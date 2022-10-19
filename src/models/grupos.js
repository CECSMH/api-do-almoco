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
        vlr_almoco_default: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario);
        Model.belongsToMany(db.Usuario, { through: db.UsuarioGrupo });
    };

    return Model;
};

export default Grupos;
