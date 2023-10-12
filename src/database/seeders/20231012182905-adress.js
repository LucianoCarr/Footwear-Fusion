"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Adresses",
      [
        {
          adress: null,
          province: [
            {
              name: "Buenos Aires",
              id: 1,
            },
            {
              name: "Catamarca",
              id: 2,
            },
            {
              name: "Chaco",
              id: 3,
            },
            {
              name: "Chubut",
              id: 4,
            },
            {
              name: "Cordoba",
              id: 5,
            },
            {
              name: "Corrientes",
              id: 6,
            },
            {
              name: "Entre Rios",
              id: 7,
            },
            {
              name: "Formosa",
              id: 8,
            },
            {
              name: "Jujuy",
              id: 9,
            },
            {
              name: "La Pampa",
              id: 10,
            },
            {
              name: "La Rioja",
              id: 11,
            },
            {
              name: "Mendoza",
              id: 12,
            },
            {
              name: "Misiones",
              id: 13,
            },
            {
              name: "Neuquen",
              id: 14,
            },
            {
              name: "Rio Negro",
              id: 15,
            },
            {
              name: "Salta",
              id: 16,
            },
            {
              name: "San Juan",
              id: 17,
            },
            {
              name: "San Luis",
              id: 18,
            },
            {
              name: "Santa Cruz",
              id: 19,
            },
            {
              name: "Santa fe",
              id: 20,
            },
            {
              name: "Santiago del Estero",
              id: 21,
            },
            {
              name: "Tierra del Fuego",
              id: 22,
            },
            {
              name: "Tucuman",
              id: 23,
            },
          ],
          city: [
            {
              name: "CABA",
              id: 1,
            },
            {
              name: "San Miguel",
              id: 2,
            },
            {
              name: "Muñiz",
              id: 3,
            },
            {
              name: "Wilde",
              id: 4,
            },
            {
              name: "Bella Vista",
              id: 5,
            },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Adresses", null, {});
  },
};
