const { newsService } = require("../service");
module.exports = {
  //   index(ctx) {
  //     // 1. 参数校验

  //     // id
  //     const { id } = ctx.query;
  //     if (!id) {
  //       ctx.body = "id 必须的";
  //       return;
  //     }

  //     // call service
  //     const { name, age } = newsService.index(id);

  //     // 2. 返回数据
  //     ctx.body = {
  //       name,
  //       age,
  //     };
  //   },

  async index(ctx) {

    const p = +ctx.query.p || 1
    const result = await newsService.index(p)

    await ctx.render("news/news",result);
  },

  async detail(ctx) {

    const id = +ctx.query.id || 1
    const result = await newsService.detail(id)
    await ctx.render("news/detail",result);
  },
};
