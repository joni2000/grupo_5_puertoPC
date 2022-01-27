module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {



        
    };
    const config = {
        tableName: "products"
    };
    const Product = sequelize.define(alias, cols, config);

    return Product
}