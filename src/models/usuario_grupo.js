const UsuarioGrupo = (sequelize, DataTypes) => {
    const Model = sequelize.define('usuario_grupo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING(2),
            allowNull: false,
            defaultValue: 'PD'
        }
    });

    Model.assoc = (db) => {
       
    };

    return Model;
};

export default UsuarioGrupo;