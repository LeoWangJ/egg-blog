'use strict';
const { USER } = require('../app/common/role');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      user_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      gender: {
        type: Sequelize.DECIMAL,
        defaultValue: 3,
      },
      picture: {
        type: Sequelize.STRING(255),
      },
      city: {
        type: Sequelize.STRING(255),
      },
      auth: {
        type: Sequelize.DECIMAL,
        defaultValue: USER,
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
