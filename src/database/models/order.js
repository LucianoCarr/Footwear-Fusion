"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        as: "user",
        foreignKey: "userId",
      });

      Order.belongsToMany(models.Product, {
        as: "products",
        foreignKey: "orderId",
        otherKey: "productId",
        through: "Carts",
        onDelete: "cascade",
      });
    }
  }
  Order.init(
    {
      date: { type: DataTypes.DATE, defaultValue: new Date() },
      total: { type: DataTypes.INTEGER, defaultValue: 0 },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
