cols = {
    id: {
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    },
    mail: {
        DataTypes.STRING
    },
    password: {
        DataTypes.STRING
    }
}
const Usuario = sequelize.define("Usuario",
 cols, {
     tableName: 'usuarios',
     timestamps: false,
 })

return Usuario;