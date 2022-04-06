module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define("Actor",
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        ranting: DataTypes.DECIMAL,
        favorite_movie_id: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    },
    {
        tableName: 'actors',
        timesTamps: false,
    });
    return Actor;
}