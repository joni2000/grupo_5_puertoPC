module.exports = (sequelize, dataTypes) => {
    const alias = "Image";
    const cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
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

    Image.associate = function (models){
        Image.hasMany(models.Product, {
            as: "products",
            foreingKey: "product_id"
        })
    }

    return Image
}