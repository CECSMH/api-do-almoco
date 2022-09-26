const Almoco = (sequelize, DataTypes) => {
    const Model = sequelize.define('almoco', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        criador_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dt_inicio: {
            type: DataTypes.DATE,
            allowNull: true
        },
        dt_fim: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    Model.assoc = (db) => {
        Model.belongsTo(db.Usuario, { foreignkey: 'criador_id', targetKey: 'id' });
    };

    return Model;
}


export default Almoco;

