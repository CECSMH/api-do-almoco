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
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pix: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        saldo: {
            type: DataTypes.DECIMAL,
            allowNull: 0
        }
    });

    Model.assoc = (db) => {
        Model.hasOne(db.Transporte, { foreignKey: 'id_usuario' });
        Model.hasOne(db.Almoco, { foreignKey: 'criador_id' });
        Model.hasOne(db.Grupos, { foreignKey: 'lider_id' });
    };

    return Model;
};

export default Usuario;