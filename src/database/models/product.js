"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as: "categoria",
        foreignKey: "categoryId",
      });
      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "productId",
        onDelete: "cascade",
      });
      Product.hasMany(models.Size, {
        as: "Sizes",
        foreignKey: "productId",
      });
      Product.belongsToMany(models.Order, {
        as: "orders",
        foreignKey: "productId",
        otherKey: "orderId",
        through: "Carts",
        onDelete : "cascade"
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      color: DataTypes.TEXT,
      hexColor: DataTypes.TEXT,
      stock: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
