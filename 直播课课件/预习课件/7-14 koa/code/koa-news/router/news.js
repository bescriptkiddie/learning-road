const newsData = require("../data/data.json");
const pageSize = 5;
let currentPageIndex;
module.exports = async (ctx) => {
  // 获取当前页新闻数据
  currentPageIndex = +ctx.query.p || 1;
  const currentNewsData = getCurrentNewsData();
  const pageCount = getPageCount();

  await ctx.render("index", {
    p: currentPageIndex,
    pageCount,
    newsData: currentNewsData,
  });
};

function getPageCount() {
  const pageCount = Math.ceil(newsData.length / pageSize);
  return pageCount;
}

function getCurrentNewsData() {
  // newsData
  // p = 1
  // pageSize = 5
  // newsData slice
  // star (p - 1) * pageSize
  //   const p = 2;
  const start = (currentPageIndex - 1) * pageSize;
  const end = start + pageSize;
  return newsData.slice(start, end);
}
