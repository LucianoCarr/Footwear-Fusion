'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        as : "role",
        foreignKey : "rolesId"
      });
      User.hasMany(models.Order, {
        as : "orders",
        foreignKey : "ordersId",
        onDelete : "cascade"
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    rolesId: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    province: DataTypes.STRING,
    //localidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};