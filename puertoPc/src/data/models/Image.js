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
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
        
    };
    const config = {
        tableName: "images",
        timestamps: false
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