cols = {
  id: {
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
};
const Usuario = sequelize.define("Usuario", cols, {
  tableName: "usuarios",
  timestamps: false,
});

return Usuario;
