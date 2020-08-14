/* eslint-disable strict */
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    username: {
      type: STRING(20),
      allowNull: true,
    },
    password: {
      type: STRING(20),
      allowNull: true,
    },
    nickname: {
      type: STRING(20),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  return User;
};
