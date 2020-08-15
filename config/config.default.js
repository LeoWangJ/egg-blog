/* eslint valid-jsdoc: "off" */

"use strict"

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1597369312667_9666"

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3307,
    database: "blog",
    username: "root",
    password: "123456",
  }

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: "127.0.0.1", // Redis host
      password: "",
      db: 0,
    },
    agent: true,
  }

  config.sessionRedis = {
    key: "EGG_BLOG_SESSION",
    maxAge: 1 * 3600 * 1000,
    httpOnly: true,
    encrypt: false,
  }

  return {
    ...config,
    ...userConfig,
  }
}
