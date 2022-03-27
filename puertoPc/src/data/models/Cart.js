module.exports = (sequelize, dataTypes) => {
    const alias = 'Cart';
    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        orderId: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        },
        productId: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        },
        userId: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        },
        quantity: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        }
    };
    const config = {
        tableName: 'carts',
        timestamps: false
    }
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = function(models) {
        Cart.belongsTo(models.Product,{
            as : 'product',
            foreignKey : 'productId'
          })
    
          Cart.belongsTo(models.Order,{
            as : 'order',
            foreignKey : 'orderId'
          })
    }
}