// 处理新闻列表
let currentPage;
const pageSize = 5;
const newsDataList = require("../data/data.json");
module.exports = async (ctx) => {
  // 获取数据
  currentPage = +ctx.query.p || 1;
  await ctx.render("news", {
    newsDataList: getCurrentPageNewsDataList(),
    len: getPageLen(),
    currentPage
  });
};

function getCurrentPageNewsDataList() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  return newsDataList.slice(start, end);
}

function getPageLen() {
  const len = Math.ceil(newsDataList.length / pageSize);
  return len;
}
