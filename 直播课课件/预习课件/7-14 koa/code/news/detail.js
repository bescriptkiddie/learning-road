const fs = require('fs');
const cheerio = require('cheerio');
const newsData = require("./data/data.json");
module.exports = (id) => {
  console.log(id);
  // 1. 生成模板数据
  const currentPageData = getCurrentPageDataById(+id);
  console.log(currentPageData);
  const content = createTemplateContent(currentPageData)
  // 2. 处理模板 -> 替换tag 内容
  const template = fs.readFileSync('./views/detail.html')
  const $ = cheerio.load(template)
  $(".text").html(content)
  // 3. 返回模板
  return $.html()
};

function createTemplateContent(data) {
  return `
        <h1 class="title">${data.title}</h1>
        <div class="article-info"> ${data.from} 时间：${data.newTime}</div>
        <p class="content">
        ${data.title}
        </p>
    `;
}

function getCurrentPageDataById(id) {
  return newsData.find((data) => data.id === id);
}
