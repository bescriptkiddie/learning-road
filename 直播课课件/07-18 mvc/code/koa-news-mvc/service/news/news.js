// 处理新闻列表
let currentPage;
const pageSize = 5;
const { getDb } = require("../../db");
const { newsModel } = require("../../model");
module.exports = async (p) => {
  // 获取数据
  currentPage = p;
  const newsDataList = await getCurrentPageNewsDataList();
  const pageCount = await getPageCount();
  return {
    newsDataList,
    pageCount,
    p: currentPage,
  };
};

async function getCurrentPageNewsDataList() {
  const offset = (currentPage - 1) * pageSize;
  const newsDataList = await newsModel.findAllByLimit(offset, pageSize);
  return newsDataList;
}

async function getPageCount() {
  const newsDataList = await newsModel.findAll();
  const len = newsDataList.length;
  const count = Math.ceil(len / pageSize);
  return count;
}
