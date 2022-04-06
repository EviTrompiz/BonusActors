
module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define("Genero",
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
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER.UNSIGNED,
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
    {
        tableName: 'genres',
        timesTamps: true,
    });
    return Genero;
}
