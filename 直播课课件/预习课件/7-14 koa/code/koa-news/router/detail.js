const newsData = require('../data/data.json');
module.exports = async (ctx) => {
  // 获取数据
  const id = +ctx.query.id 
  const currentPageData = getCurrentPageDataById(+id);
  await ctx.render("detail",{
      data:currentPageData
  });
};

function getCurrentPageDataById(id) {
  return newsData.find((data) => data.id === id);
}
