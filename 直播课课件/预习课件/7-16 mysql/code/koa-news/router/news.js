const { getDB } = require("../db");
const pageSize = 5;
let currentPageIndex;
module.exports = async (ctx) => {
  // 获取当前页新闻数据
  currentPageIndex = +ctx.query.p || 1;
  const currentNewsData = await getCurrentNewsData();
  const pageCount = await getPageCount();

  await ctx.render("index", {
    p: currentPageIndex,
    pageCount,
    newsData: currentNewsData,
  });
};

async function getPageCount() {
  const sql = `SELECT * FROM news`;
  const [rows] = await getDB().execute(sql);

  const pageCount = Math.ceil(rows.length / pageSize);
  return pageCount;
}

async function getCurrentNewsData() {
  // newsData
  // p = 1
  // pageSize = 5
  // newsData slice
  // star (p - 1) * pageSize
  //   const p = 2;
  // const start = (currentPageIndex - 1) * pageSize;
  // const end = start + pageSize;
  // return newsData.slice(start, end);
  const limit = pageSize;
  const offset = (currentPageIndex - 1) * pageSize;
  const sql = `SELECT * from news LIMIT ?,?`;
  const [rows] = await getDB().execute(sql, [offset, limit]);
  return rows;
}
