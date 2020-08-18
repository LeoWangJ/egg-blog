/* eslint-disable strict */
const jwt = require('jsonwebtoken');
module.exports = () => {
  return async function verify(ctx, next) {
    const { app } = ctx;
    const token = ctx.header.authorization || '';
    await jwt.verify(token, app.config.JWT_SECRET_KEY, async (err, data) => {
      if (err) {
        ctx.status = 422;
        ctx.body = {
          success: false,
          messages: 'token 驗證失敗',
        };
        return;
      }
      const redisToken = await app.redis.get(data.user.id);
      const tokenExpired = await app.redis.ttl(data.user.id);

      if (token === redisToken) {
        if (redisToken && tokenExpired < 60 * 30 && tokenExpired > 0) {
          app.redis.expire(data.user.id, 60 * 60);
        }
        ctx.userInfo = data;
        next();
      } else {
        ctx.status = 422;
        ctx.body = {
          success: false,
          messages: 'token 已過期',
        };
        return;
      }
    });
  };
};
