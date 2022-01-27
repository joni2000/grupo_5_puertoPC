module.exports = (sequelize, dataTypes) => {
    const alias = "Image";
    const cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(100) ,
            allowNull: false,
        },

        
    };
    const config = {
        tableName: "images"
    };
    const Image = sequelize.define(alias, cols, config);

    return Image
}