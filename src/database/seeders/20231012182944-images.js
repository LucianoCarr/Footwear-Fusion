"use strict";
//const products = require("../../data/images.json");
const imagesStructureDB = [
  {
      "id": 1,
      "images": [
          "naranja-02.jpg",
          "naranja-03.jpg",
          "naranja-04.jpg"
       ]
  },
  {
      "id": 2,
      "images": [
          "azul-02.jpg",
          "azul-03.jpg",
          "azul-04.jpg"
       ]
  },
  {
      "id": 3,
      "images": [
          "blanca-02.jpg",
       "blanca-03.jpg",
       "blanca-04.jpg"
       ]
  },
  {
      "id": 4,
      "images": [
          "rojo-02.jpg",
          "rojo-03.jpg",
          "rojo-04.jpg"
       ]
  },
  {
      "id": 5,
      "images": [
          "violeta-02.jpg",
       "violeta-03.jpg",
       "violeta-04.jpg"
       ]
  },
  {
      "id": 6,
      "images": [
          "negra-02.avif",
       "negra-03.avif",
       "negra-04.avif"
       ]
  },
  {
      "id": 7,
      "images": [
          "blanco-02.jpg",
          "blanco-03.jpg",
          "blanco-04.jpg"
       ]
  },
  {
      "id": 8,
      "images": [
          "negro-02.jpg",
       "negro-03.jpg",
       "negro-04.jpg"
       ]
  }
]

const imagesProducts = imagesStructureDB.map(({ id, images }) => {
  const imgsFormat = images.map((img) => {
    return {
      productId: id,
      filename: img,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });
  return imgsFormat
}).flat(3);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert(
      "Images",imagesProducts,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
