"use strict";

const structureProductsDB = [
  {
    name: "Fresh Foam X 1080v12 Wide",
    price: 89000,
    discount: 15,
    description:
      "Empeine Hypoknit diseñado para proporcionar áreas estratégicas de sujeción y elasticidad La construcción tipo bootie envuelve el pie para brindar un ajuste ceñido y firme La suela exterior de goma soplada en la parte delantera del pie brinda un rebote superior",
    image: "naranja-01.jpg",
    color: "naranja",
    stock: true,
    categoryId: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Vans Zapatillas U AUTHENTIC 2",
    price: 28900,
    discount: 0,
    description:
      "Calzado skate icónico de la marca + Suela vulcanizada +\r\nCapellada de textil de algodón + Plantilla desmontable de EVA + Suela de caucho\r\nvulcanizada para un mejor agarre y menor desgaste + Excelente calce y confort.",
    image: "azul-01.jpg",
    color: "azul",
    stock: true,
    categoryId: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Botitas Jordan Air 7 Retro Cardinal",
    price: 136000,
    discount: 0,
    description:
      "Botitas Jordan Air 7 Retro Cardinal De Moda Para Hombre Código: Cu9307-106",
    image: "blanca-01.jpg",
    color: "blanco",
    stock: true,
    categoryId: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Vans Zapatillas K SK8-MID REISSUE V",
    price: 29800,
    discount: 10,
    description:
      "Ideales para todo tipo de rutinas y actividades. Su diseño y confort las convierten en el calzado perfecto.",
    image: "rojo-01.jpg",
    color: "rojo",
    stock: true,
    categoryId: 3,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "FuelCell Rebel v3",
    price: 81400,
    discount: 10,
    description:
      "Fusionando velocidad y amortiguación, la FuelCell Rebel v3 te aporta la energía que necesitas en tus quehaceres diarios, sesiones de entrenamiento o largas competiciones. Esta zapatilla de running para mujer incorpora la espuma FuelCell de alto rebote que te propulsa a cada zancada y está confeccionada en un empeine de punto técnico muy ligero, con la cantidad justa de estructura para que te desplaces a ritmos muy altos.",
    image: "violeta-01.jpg",
    color: "violeta",
    stock: true,
    categoryId: 2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Zapatillas Lite Racer Rebold",
    price: 41000,
    discount: 25,
    description:
      "Inspiradas en el estilo running, estas zapatillas adidas le imprimen energía deportiva a tu look diario. La amortiguación liviana mantiene tus pies cómodos y preparados para todo lo que te depare el día.",
    image: "negra-01.jpg",
    color: "negro",
    stock: true,
    categoryId: 3,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Nike Air Max SC",
    price: 54000,
    discount: 30,
    description:
      "Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, el Nike Air Max SC es el toque final perfecto para cualquier atuendo.",
    image: "blanco-01.jpg",
    color: "blanco",
    stock: false,
    categoryId: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name: "Nike Free Metcon 5",
    price: 83000,
    discount: 5,
    description:
      "Cuando tus entrenamientos se ponen superespecíficos, el Nike Free Metcon 5 te ayuda a llegar a esos lugares profundos para encontrar ese último gramo de fuerza y salir del otro lado en un grito de victoria. Combina estilo con sustancia y flexibilidad en el antepié con estabilidad en la parte superior, perfecto para volar durante un día de cardio o mejorar tu agilidad.",
    image: "negro-01.jpg",
    color: "negro",
    stock: false,
    categoryId: 1,
    createdAt : new Date,
    updatedAt : new Date
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products",structureProductsDB,{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};