const Adicionais = (sequelize, DataTypes) => {

    const Model = sequelize.define('adicionais', {
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
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        preco: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        vlr_pago: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        pago_por: {
            type: DataTypes.STRING(3),
            allowNull: true
        }
    });

    return Model;
};

export default Adicionais;