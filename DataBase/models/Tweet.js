cols = {
    id: {
        type: DataTypes.INTEGER
    },
    user: {
        type: DataTypes.STRING
    },
    contenido: {
        DataTypes.TEXT
    },
}
const Tweet = sequelize.define("Tweet",
 cols, {
     tableName: 'tweets',
     timestamps: true,
 })

return Tweet;