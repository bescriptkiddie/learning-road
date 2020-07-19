const { newsService } = require("../service");
module.exports = {
  //   index(ctx) {
  //     // id
  //     // 校验参数
  //     const { id } = ctx.query;
  //     if (!id) {
  //       ctx.body = "id 是必须的";
  //       return;
  //     }

  //     // 业务逻辑交给 service
  //     const { id: uId, name, age } = newsService.index(id);

  //     ctx.body = {
  //       id: uId,
  //       name,
  //       age,
  //     };

  //     // id
  //     // 返回数据
  //     // ctx.body = "news - index";
  //   },
  async index(ctx) {
    const p = +ctx.query.p || 1;
    // 基于 service 拿到
    const result = await newsService.index(p);
    console.log(result)
    await ctx.render("news/news", result);
  },
};
