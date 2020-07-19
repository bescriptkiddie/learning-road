const {adminService} = require('../service');
module.exports = {
  async index(ctx) {
    await ctx.render("admin/admin")
  },

  async addNewsPage(ctx) {
    await ctx.render("admin/addNews")
  },

  async addData(ctx) {

    const {from,title} = ctx.request.body
    const {img} = ctx.request.files
    // console.log(from,title)
    // console.log(img)
    
    // post 数据 body
    // 先接收数据
    // service 图片保存  保存到 db
    const result = await adminService.addData({from,title,img})

    await ctx.render("admin/message",{result:result.affectedRows})
  },

  async newsListPage(ctx){
      await ctx.render("admin/newsList")
  }
};
