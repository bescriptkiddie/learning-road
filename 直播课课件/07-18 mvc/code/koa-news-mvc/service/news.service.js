const { newsModel } = require("../model");
const getNewsInfo = require("./news/news");
module.exports = {
  async index(p) {
    const result = await getNewsInfo(p);
    return result;
  },
};
