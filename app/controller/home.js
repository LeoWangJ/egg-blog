'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getUserList() {
    const { ctx } = this;
    ctx.body = await ctx.model.Users.findAll();
  }
}

module.exports = HomeController;
