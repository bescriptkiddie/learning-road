const { uploadService } = require('../service')

module.exports = {
  async index(ctx) {
    await ctx.render('/upload/upload')
  },

  async addData(ctx) {
    // 获取 --> img && title && from
    // 哪里获得数据 --> ctx
    const { title } = ctx.request.body
    const { img } = ctx.request.files
    const result = await uploadService.addData(title, img)
    // if (result.affectedRows > 0) {
    //   await ctx.render("admin/message", {
    //     result: result.affectedRows,
    //   });
    // }
    // console.log(img)
    ctx.body = result
  },
}
