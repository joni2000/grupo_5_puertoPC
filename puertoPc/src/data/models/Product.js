module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(80) ,
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(800),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        image_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        color_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }

    };
    const config = {
        timestamps: true,
        tableName: "products",
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreingKey: "category_id"
        }),
        Product.belongsTo(models.Color, {
            as: "color",
            foreingKey: "color_id"
        }),
        Product.belongsTo(models.Image, {
            as: "image",
            foreingKey: "image_id"
        })
    }

    return Product
}