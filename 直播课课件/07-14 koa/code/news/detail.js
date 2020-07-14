const newsDataList = require("./data/data.json");
const fs = require("fs");
const cheerio = require("cheerio");
module.exports = (id) => {
  // 获取数据
  // 基于数据生成模板
  // 返回模板

  const template = fs.readFileSync("./views/detail.html");
  const $ = cheerio.load(template);
  const currentId = +id || 1;
  const currentNewsData = getCurrentNewsDataById(currentId);
  console.log(currentNewsData);
  $(".text").html(createDetailInnerHtml(currentNewsData));
  return $.html()
//   return template;
};

function createDetailInnerHtml(data) {
  return `
        <h1 class="title">${data.title}</h1>
        <div class="article-info"> ${data.from} 时间：${data.newTime}</div>
        <p class="content">
            ${data.title}
        </p>
    `;
}

function getCurrentNewsDataById(id) {
  return newsDataList.find((data) => data.id == id);
}
