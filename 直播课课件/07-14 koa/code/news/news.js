const newsDataList = require("./data/data.json");
const cheerio = require("cheerio");
const fs = require("fs");
const pageSize = 5;
let currentPage;
module.exports = (p) => {
  currentPage = p || 1;
  const template = fs.readFileSync("./views/news.html");
  // 初始化 cheerio
  const $ = cheerio.load(template);
  // 生成newsList 的数据
  $(".news-list").html(createNewsListInnerHtml());
  $(".pagination").html(createPaginationInnerHtml());
  //   return template;
  return $.html();
};

const createNewsItemHtml = (data) => {
  return `
            <li class="news">
                <a href="javascript:;">
                    <img src="${data.imgUrl}" alt="">
                </a>
                <div>
                    <h3>
                        <a href="/detail?id=${data.id}">${data.title} 官方初判为“硝酸雾”0</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>${data.from}</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;${data.newTime}</span>
                    </div>
                </div>
            </li>
    `;
};

function getCurrentPageNewsDataList() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  return newsDataList.slice(start, end);
}
function createNewsListInnerHtml() {
  let result = "";
  getCurrentPageNewsDataList().forEach((newsData) => {
    result += createNewsItemHtml(newsData);
  });
  // console.log(result);
  return result;
}

function createPaginationInnerHtml() {
  const len = Math.ceil(newsDataList.length / pageSize);

  const prevPage = Math.max(currentPage - 1, 1);
  const nextPage = Math.min(currentPage + 1, len);

  let result = `<a href="/?p=${prevPage}" class="prev">⌜</a>`;
  for (let index = 1; index <= len; index++) {
    result += `<a href="/?p=${index}">${index}</a>`;
  }
  result += `<a href="/?p=${nextPage}" class="next">⌝</a>`;

  return result;
}
