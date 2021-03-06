'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {
    super(ctx);
    this.serviceResponse = ctx.response.Response;
  }

  async register() {
    const { ctx, app } = this;
    const { user_name, password, nickname, gender, picture, city } = ctx.request.body;

    const errors = app.validator.validate({
      user_name: { type: 'string', required: true, desc: '帳號' },
      password: { type: 'string', required: true, desc: '密碼' },
      nickname: { type: 'string', required: true, desc: '暱稱' },
    }, ctx.request.body);


    if (errors) {
      ctx.body = this.serviceResponse.errorMsgAndData('參數驗證錯誤', errors);
      return;
    }

    ctx.body = await ctx.service.user.register({ user_name, password, nickname, gender, picture, city });
  }

  async login() {
    const { ctx, app } = this;
    const { user_name, password } = ctx.request.body;

    const errors = app.validator.validate({
      user_name: { type: 'string', required: true, desc: '帳號', message: '帳號必填' },
      password: { type: 'string', required: true, desc: '密碼', message: '密碼必填' },
    }, ctx.request.body);


    if (errors) {
      ctx.body = this.serviceResponse.errorMsgAndData('參數驗證錯誤', errors);
      return;
    }

    ctx.body = await ctx.service.user.login({ user_name, password });
  }

  async test() {
    const { ctx } = this;
    ctx.body = this.serviceResponse.successData(ctx.userInfo);
  }
}

module.exports = UserController;
