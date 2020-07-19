const { newsModel } = require("../../model");
const pageSize = 5;
let currentPageIndex;
module.exports = async (p) => {
  // 获取当前页新闻数据
  currentPageIndex = p;
  const currentNewsData = await getCurrentNewsData();
  const pageCount = await getPageCount();

  return {
    p: currentPageIndex,
    pageCount,
    newsData: currentNewsData,
  };
};

async function getPageCount() {
  const models = await newsModel.findAll();
  const pageCount = Math.ceil(models.length / pageSize);
  return pageCount;
}

async function getCurrentNewsData() {
  const limit = pageSize;
  const offset = (currentPageIndex - 1) * pageSize;
  const result = await newsModel.findAllByLimit(offset, limit);
  return result;
}
