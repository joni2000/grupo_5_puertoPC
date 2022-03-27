module.exports = (sequelize, dataTypes) => {
    const alias = 'Order';
    const cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userId: {
            type: dataTypes.INTEGER(11),
            defaultValue: null
        },
        status: {
            type: dataTypes.STRING(255),
            defaultValue: null
        }
    };
    const config = {
        tableName: 'orders',
        timestamps: false
    }
    const Order = sequelize.define(alias, cols, config)

    Order.associate = function(models) {
        Order.hasMany(models.Cart,{
            as : 'carts',
            foreignKey : 'orderId',
            onDelete : 'cascade'
          })
    }

    return Order
}