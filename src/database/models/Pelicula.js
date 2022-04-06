
module.exports = (sequelize, DataTypes) => {
    const Pelicula = sequelize.define("Pelicula",
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
        title: DataTypes.STRING(500),
        rating: DataTypes.DECIMAL.UNSIGNED,
        awards: DataTypes.INTEGER.UNSIGNED,
        release_date: DataTypes.DATE,
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    },
    {
        tableName: 'movies',
        timesTamps: true,
    });
    return Pelicula;
}
