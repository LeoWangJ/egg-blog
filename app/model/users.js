/* eslint-disable strict */
module.exports = app => {
  const { INTEGER, STRING, DECIMAL } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    user_name: {
      type: STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING(255),
      allowNull: false,
    },
    nickname: {
      type: STRING(255),
      allowNull: false,
    },
    gender: {
      type: DECIMAL,
      defaultValue: 3,
    },
    picture: {
      type: STRING(255),
    },
    city: {
      type: STRING(255),
    },
  });

  User.beforeBulkUpdate(user => {
    user.attributes.updateTime = new Date();
    return user;
  });
  return User;
};
