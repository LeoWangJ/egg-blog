/* eslint-disable strict */
module.exports = app => {
  const { INTEGER, TEXT, DATE, STRING, NOW } = app.Sequelize;
  const Blog = app.model.define('blogs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
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
      defaultValue: NOW,
    },
    created_at: {
      type: DATE,
      defaultValue: NOW,
    },
  }, {
    timestamps: false,
  });
  return Blog;
};
