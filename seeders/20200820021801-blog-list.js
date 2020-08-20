'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('blog', [{
      userId: 14,
      title: '妳好',
      content: '大家好',
      updated_at: new Date(),
      created_at: new Date(),
    }, {
      userId: 14,
      title: '妳好1',
      content: '大家好1',
      updated_at: new Date(),
      created_at: new Date(),
    }, {
      userId: 14,
      title: '妳好2',
      content: '大家好2',
      updated_at: new Date(),
      created_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('blog', null, {});
  },
};
