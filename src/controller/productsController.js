const db = require("../database/models");

module.exports = {
  cart : require('./products/cart'),
  details : require('./products/details'),
  add : require('./products/add'),
  create : require('./products/create'),
  edit : require('./products/edit'),
  modify : require('./products/modify'),
  destroy : require('./products/destroy')
}
