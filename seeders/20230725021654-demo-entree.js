"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert("Entrees", [
			{
				entreeitem: "Burger",
				price: "12",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				entreeitem: "Quesadilla",
				price: "11",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				entreeitem: "Chicken Sammy",
				price: "14",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				entreeitem: "Wings and Rings",
				price: "13",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				entreeitem: "McCheese",
				price: "9",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
			{
				entreeitem: "Last Meal",
				price: "10",
        createdAt: new Date(),
        updatedAt: new Date(),
			},
		]);
	},

	/**
	 * Add commands to revert seed here.
	 *
	 * Example:
	 * await queryInterface.bulkDelete('People', null, {});
	 */
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Entrees", null, {});
	},
};
