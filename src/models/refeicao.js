const Refeicao = (sequelize, DataTypes) => {
    const Model = sequelize.define('refeicoes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        data: {
            type: DataTypes.DATE,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(2),
            allowNull: true,
            defaultValue: 'A'
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario);
        Model.belongsTo(db.Grupos);
        Model.belongsToMany(db.Usuario, { through: db.UsuarioRefeicao});
    };

    return Model;
};


export default Refeicao;

