'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    /* Cart.belongsTo(models.Order, {
        as : 'order',
        foreignKey : 'orderId'
      });
    Cart.belongsTo(models.product, {
        as : 'product',
        foreignKey : 'productId'
    }); */
    }
  }
  Cart.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};