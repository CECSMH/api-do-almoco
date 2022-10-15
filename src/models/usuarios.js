const Usuario = (sequelize, DataTypes) => {
    const Model = sequelize.define('usuario', {
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
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pix: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: ''
        },
        saldo: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            defaultValue: 0
        },
        mac: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    Model.assoc = (db) => {
        Model.hasOne(db.Transporte, { foreignKey: 'id_usuario' });
        Model.hasOne(db.Refeicao, { foreignKey: 'criador_id' });
        Model.hasOne(db.Grupos, { foreignKey: 'lider_id' });
        Model.belongsToMany(db.Grupos, { through: db.UsuarioGrupo });
    };

    return Model;
};

export default Usuario;