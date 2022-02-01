module.exports = (sequelize, dataTypes) => {
    const alias = "Category";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(80) ,
            allowNull: false,
        },
    };
    const config = {
        timestamps: true,
        tableName: "categories"
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.hasMany(models.Product, {
            as: "products",
            foreingKey: "category_id"
        })
    }

    return Category
}