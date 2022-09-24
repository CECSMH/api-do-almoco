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
    })


    return Model;
};

export default Usuario;