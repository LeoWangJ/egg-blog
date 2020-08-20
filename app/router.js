'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);
  router.get('/test', app.middleware.vertifyToken(), controller.user.test);

  router.get('/blog/list', controller.blog.list);
  router.post('/blog/create', app.middleware.vertifyToken(), controller.blog.create);
};
