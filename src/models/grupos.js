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
        Model.belongsToMany(db.Usuario, { through: db.UsuarioGrupo });
    };

    return Model;
};

export default Grupos;
