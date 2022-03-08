module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {

        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        first_name: {
            type: dataTypes.STRING(45) ,
            allowNull: false,
        },

        last_name: {
            type: dataTypes.STRING(45) ,
            allowNull: false,
        },

        email: {
            type: dataTypes.STRING(60) ,
            allowNull: false,
        },

        password: {
            type: dataTypes.STRING(70) ,
            allowNull: false,
        },

        address: {
            type: dataTypes.STRING(100) ,
        },

        city: {
            type: dataTypes.STRING(100) ,
        },

        phone: {
            type: dataTypes.STRING(30) ,
            allowNull: false,

        },

        rol: {
            type: dataTypes.STRING(20) ,
            allowNull: false,
            defaultValue: 0,
        },

        image: {
            type: dataTypes.STRING(100) ,
            allowNull: false,
            defaultValue: "default_image",
        },

        country: {
            type: dataTypes.STRING(100) ,
        },

        province: {
            type: dataTypes.STRING(100) ,
        },

    };
    const config = {
        tableName: "users"
    };
    const User = sequelize.define(alias, cols, config);

    return User
}