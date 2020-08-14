/* eslint-disable strict */
module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Blog = app.model.define('blogs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    title: {
      type: STRING(45),
      allowNull: true,
    },
    content: {
      type: TEXT,
      allowNull: true,
    },
    userid: {
      type: INTEGER,
      allowNull: true,
    },
  });
  return Blog;
};
