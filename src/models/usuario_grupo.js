const UsuarioGrupo = (sequelize, DataTypes) => {
    const Model = sequelize.define('usuario_grupo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    });

    Model.assoc = (db) => {
       
    };

    return Model;
};

export default UsuarioGrupo;