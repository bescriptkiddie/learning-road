const { adminService } = require('../service')

module.exports = {
  async index(ctx) {
    await ctx.render('admin/admin')
  },
  async addNews(ctx) {
    await ctx.render('admin/addNews')
  },

  async addData(ctx) {
    // 获取 --> img && title && from
    // 哪里获得数据 --> ctx
    const { title, from } = ctx.request.body
    const { img } = ctx.request.files
    const result = await adminService.addData(title, from, img)
    // if (result.affectedRows > 0) {
    //   await ctx.render("admin/message", {
    //     result: result.affectedRows,
    //   });
    // }
    ctx.body = result
  },
}
