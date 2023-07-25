'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Entree', [
      {
        entreeItem: 'Chicken Wrap',
        price: '12',
        },
      {
        entreeItem: 'Taquitos',
        price: '8',
        },
      {
        entreeItem: 'Flautas',
        price: '11',
        
        },
      {
        entreeItem: 'Burger',
        price: '14',
        
        },
    ],);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Entree', null, {});

  }
};




