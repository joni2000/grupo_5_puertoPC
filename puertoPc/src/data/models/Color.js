module.exports = (sequelize, dataTypes) => {
    const alias = "Color";
    const cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45) ,
            allowNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }


        
    };
    const config = {
        tableName: "colors"
    };
    const Color = sequelize.define(alias, cols, config);
    
    Color.associate = function (models){
        Color.belongsTo(models.Product, {
            as: "products",
            foreingKey: "product_id"
        })
    }

    return Color
}