'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as : "category",
        foreignKey : "categoriesId"
      });
      Product.hasMany(models.Image, {
        as : "images",
        foreignKey : "productId",
        onDelete : "cascade"
      });
      Product.hasMany(models.Size, {
        as : "Sizes",
        foreignKey : "productId",
        onDelete : "cascade"
      });
      Product.belongsToMany(models.Order, {
        as : "orders",
        foreignKey : "productId",
        through : "carts",
        otherKey : "orderId",
        onDelete : "cascade"
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    stock: DataTypes.STRING,
    cartId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};