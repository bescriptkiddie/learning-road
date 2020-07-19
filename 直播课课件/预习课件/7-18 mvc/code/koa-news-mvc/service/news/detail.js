const { newsModel } = require("../../model");
module.exports = async (id) => {
  // 获取数据
  const currentPageData = await getCurrentPageDataById(id);

  return {
    data: currentPageData,
  };
};

async function getCurrentPageDataById(id) {
  // return newsData.find((data) => data.id === id);

  // const sql = `SELECT * FROM news WHERE id=?`;
  // const [rows] = await getDB().execute(sql,[id]);
  // return rows[0];
  const model = await newsModel.findByPK(id);
  return model;
}
