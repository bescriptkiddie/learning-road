const { adminService } = require("../service");
module.exports = {
  async index(ctx) {
    await ctx.render("admin/admin");
  },
  async addNewsPage(ctx) {
    await ctx.render("admin/addNews");
  },

  async addData(ctx) {
    // 获取到上传的图片文件
    // title from 数据
    // 数据从哪里获取到
    const { title, from } = ctx.request.body;
    const { img } = ctx.request.files;
    const result = await adminService.addData(title, from, img);
    if (result.affectedRows > 0) {
      await ctx.render("admin/message", {
        result: result.affectedRows,
      });
    }
  },
};
