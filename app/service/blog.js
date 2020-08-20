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
      console.log(e);
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

  async update(data) {
    const { ctx } = this;
    const blog = await this.getBlog(data.id);

    if (blog.user_id !== ctx.userInfo.user.id) {
      return this.serviceResponse.errorMsg('未有權限');
    }
    if (blog === null) {
      return this.serviceResponse.errorMsg('未找到該blog id');
    }
    try {
      await blog.update({ ...data });
      return this.serviceResponse.successMsg('成功');
    } catch (e) {
      return this.serviceResponse.error();
    }
  }

  async getBlog(id = null) {
    const { ctx } = this;
    return await ctx.model.Blog.findOne({ where: { id } });
  }
}

module.exports = BlogService;
