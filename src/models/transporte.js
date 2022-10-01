const Transporte = (sequelize, DataTypes) => {
    const Model = sequelize.define('transporte', {
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
        qtd_lugares: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario, { foreignkey: 'id_usuario', targetKey: 'id' });
    };

    return Model;
} 

export default Transporte;