/* eslint-disable strict */
module.exports = app => {
  app.beforeStart(async function() {
    app.model.sync();
  });
};
