'use strict';

const Service = require('egg').Service;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.serviceResponse = ctx.response.Response;
  }

  async register(data) {
    const { ctx } = this;
    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);

    try {
      const user = await ctx.model.Users.findOne({ where: { user_name: data.user_name } });
      if (user) {
        return this.serviceResponse.errorMsg('此帳號已被註冊');
      }

      await ctx.model.Users.create({ ...data, password: hash });
      return this.serviceResponse.success();
    } catch (e) {
      return this.serviceResponse.errorMsg('系統錯誤');
    }
  }

  async login(data) {
    const { ctx, app } = this;
    const user = await ctx.model.Users.findOne({ where: { user_name: data.user_name } });

    if (user === null) {
      return this.serviceResponse.errorMsg('找不到該使用者');
    }
    if (!bcrypt.compareSync(data.password, user.password)) {
      return this.serviceResponse.errorMsg('密碼錯誤');
    }

    const token = jwt.sign({
      user,
    },
    app.config.JWT_SECRET_KEY);

    // 添加至redis進行token持久化, 並且銷毀先前token, 保持安全性
    app.redis.set(user.id, token);
    app.redis.expire(user.id, 60 * 60);

    return this.serviceResponse.successMsgAndData('成功', { token });
  }
}

module.exports = UserService;
