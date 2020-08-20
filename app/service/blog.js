'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  constructor(ctx) {
    super(ctx);
    this.serviceResponse = ctx.response.Response;
  }

  async list(user_id = null) {
    const { ctx } = this;
    let queryOptions = {};
    if (user_id !== null) {
      queryOptions = {
        where: {
          user_id,
        },
      };
    }

    try {
      const result = await ctx.model.Blog.findAll(queryOptions);
      return this.serviceResponse.successData(result);
    } catch (e) {
      return this.serviceResponse.errorData([]);
    }
  }

  async create(data) {
    const { ctx } = this;
    try {
      await ctx.model.Blog.create({ ...data, user_id: ctx.userInfo.user.id });
      return this.serviceResponse.successMsg('成功');
    } catch (e) {
      return this.serviceResponse.error();
    }
  }
}

module.exports = BlogService;
