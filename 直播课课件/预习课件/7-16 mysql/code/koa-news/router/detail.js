const newsData = require("../data/data.json");
const { getDB } = require("../db");
module.exports = async (ctx) => {
  // 获取数据
  const id = +ctx.query.id;
  const currentPageData = await getCurrentPageDataById(+id);
  await ctx.render("detail", {
    data: currentPageData,
  });
};

async function getCurrentPageDataById(id) {
  // return newsData.find((data) => data.id === id);

  const sql = `SELECT * FROM news WHERE id=?`;
  const [rows] = await getDB().execute(sql,[id]);
  return rows[0];
}
