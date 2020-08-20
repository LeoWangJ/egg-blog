'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.serviceResponse = ctx.response.Response;
  }

  async list() {
    const { ctx } = this;
    const { user_id } = ctx.request.query;
    ctx.body = await ctx.service.blog.list(user_id);
  }

  async create() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    ctx.body = await ctx.service.blog.create({ title, content });
  }

}

module.exports = BlogController;
