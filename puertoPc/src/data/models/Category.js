module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {



        
    };
    const config = {
        tableName: "products"
    };
    const Product = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.hasMany(models.Product, {
            as: "products",
            foreingKey: "category_id"
        })
    }

    return Product
}