const Extrato = (sequelize, DataTypes) => {
    const Model = sequelize.define('extrato', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        grupo_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        almoco_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        valor: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        acao: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING(2),
            allowNull: false
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario, { foreignkey: 'usuario_id', targetKey: 'id' });
        Model.belongsTo(db.Grupos, { foreignkey: 'grupo_id', targetKey: 'id' });
        Model.belongsTo(db.Almoco, { foreignkey: 'almoco_id', targetKey: 'id' });
    };

    return Model;
}


export default Extrato;