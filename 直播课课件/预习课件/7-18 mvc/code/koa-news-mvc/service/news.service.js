const { newsModel } = require("../model");
const getNewsInfo = require('./news/news');
const getDetailInfo = require('./news/detail');

module.exports = {
  async index(p) {
    // const model = newsModel.findOne(id);
    // return model;
    const result = await getNewsInfo(p)
    return result;
  },

  async detail(id) {
    const result = await getDetailInfo(id)
    return result;
  },
};
