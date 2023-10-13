'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Images', [{
        filename: "naranja-01.jpg",
        others :  "naranja-02.jpg",
        others2 :  "naranja-03.jpg",
        others3 :  "naranja-04.jpg",
        others4 :  false,
        others5 :  false,
        productId: 1,
        createdAt : new Date,
      updatedAt : new Date
      },
      {
        filename: "azul-01.jpg",
        others :  "azul-02.jpg",
        others2 :  "azul-03.jpg",
        others3 :  "azul-04.jpg",
        others4 :  false,
        others5 :  false,
        productId: 2,
        createdAt : new Date,
      updatedAt : new Date
    },
    {
      filename: "blanca-01.jpg",
      others :  "blanca-02.jpg",
      others2 :  "blanca-03.jpg",
      others3 :  "blanca-04.jpg",
      others4 :  false,
      others5 :  false,
      productId: 3,
      createdAt : new Date,
    updatedAt : new Date
  },
  {
    filename: "rojo-01.jpg",
    others :  "rojo-02.jpg",
    others2 :  "rojo-03.jpg",
    others3 :  "rojo-04.jpg",
    others4 :  false,
    others5 :  false,
    productId: 4,
    createdAt : new Date,
  updatedAt : new Date
},
{
  filename: "violeta-01.jpg",
  others :  "violeta-02.jpg",
  others2 :  "violeta-03.jpg",
  others3 :  "violeta-04.jpg",
  others4 :  false,
  others5 :  false,
  productId: 5,
  createdAt : new Date,
updatedAt : new Date
},
{
  filename: "negra-01.jpg",
  others :  "negra-02.jpg",
  others2 :  "negra-03.jpg",
  others3 :  "negra-04.jpg",
  others4 :  false,
  others5 :  false,
  productId: 6,
  createdAt : new Date,
updatedAt : new Date
},
{
  filename: "blanco-01.jpg",
  others :  "blanco-02.jpg",
  others2 :  "blanco-03.jpg",
  others3 :  "blanco-04.jpg",
  others4 :  false,
  others5 :  false,
  productId: 7,
  createdAt : new Date,
updatedAt : new Date
},
{
  filename: "negro-01.jpg",
  others :  "negro-02.jpg",
  others2 :  "negro-03.jpg",
  others3 :  "negro-04.jpg",
  others4 :  false,
  others5 :  false,
  productId: 8,
  createdAt : new Date,
updatedAt : new Date
      
      }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});

  }
};