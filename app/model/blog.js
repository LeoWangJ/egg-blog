/* eslint-disable strict */
module.exports = app => {
  const { INTEGER, TEXT, DATE, STRING } = app.sequelize;
  const Blog = app.model.define('blogs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    title: {
      type: STRING(20),
      allowNull: false,
    },
    content: {
      type: TEXT,
      allowNull: false,
    },
    updated_at: {
      type: DATE,
      defaultValue: new Date(),
    },
    created_at: {
      type: DATE,
      defaultValue: new Date(),
    },
  });
  return Blog;
};
