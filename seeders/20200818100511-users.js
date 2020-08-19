'use strict';
const bcrypt = require('bcrypt');
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

    return await queryInterface.bulkInsert('users', [{
      user_name: 'root',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      nickname: 'root',
      gender: 1,
      picture: null,
      city: '台中',
      auth: 3,
      updated_at: new Date(),
      created_at: new Date(),
    }, {
      user_name: 'user1',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      nickname: 'user1',
      gender: 2,
      picture: null,
      city: '台中',
      auth: 3,
      updated_at: new Date(),
      created_at: new Date(),
    }, {
      user_name: 'user2',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      nickname: 'user2',
      gender: 3,
      picture: null,
      city: '台中',
      auth: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('users', null, {});
  },
};
