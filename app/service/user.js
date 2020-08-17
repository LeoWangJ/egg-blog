'use strict';

const Service = require('egg').Service;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService extends Service {
  async register(data) {
    const { ctx } = this;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);
    try {
      const user = await ctx.model.Users.findOne({ where: { user_name: data.user_name } });
      if (user) {
        return {
          success: false,
          message: '此帳號已被註冊',
        };
      }

      await ctx.model.Users.create({ ...data, password: hash });
      return {
        success: true,
        message: '成功',
      };
    } catch (e) {
      return {
        success: false,
        message: '失敗',
      };
    }
  }

  async login(data) {
    const { ctx, app } = this;
    const user = await ctx.model.Users.findOne({ where: { user_name: data.user_name } });

    if (user === null) {
      return {
        success: false,
        message: '找不到該使用者',
      };
    }
    if (!bcrypt.compareSync(data.password, user.password)) {
      return {
        success: false,
        message: '密碼錯誤',
      };
    }

    const token = jwt.sign({
      user,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    app.config.JWT_SECRET_KEY);


    return {
      success: true,
      message: '成功',
      token,
    };
  }
}

module.exports = UserService;
