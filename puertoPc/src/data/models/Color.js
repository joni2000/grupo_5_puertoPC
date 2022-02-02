module.exports = (sequelize, dataTypes) => {
    const alias = "Color";
    const cols = {

        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45) ,
            allowNull: false,
        },

        
    };
    const config = {
        tableName: "colors"
    };
    const Color = sequelize.define(alias, cols, config);
    
    Color.associate = function (models){
        Color.belongTo(models.Product, {
            as: "products",
            foreingKey: "color_id"
        })
    }

    return Color
}