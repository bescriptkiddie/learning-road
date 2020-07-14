const fs = require("fs");
const cheerio = require("cheerio");
const newsData = require("./data/data.json");
const pageSize = 5;
let currentPageIndex;
module.exports = (p) => {
  // 获取当前页新闻数据
  currentPageIndex = +p || 1;
  const currentNewsData = getCurrentNewsData();
  // 读取 index.html 模板
  const homePage = fs.readFileSync("./views/index.html");
  const $ = cheerio.load(homePage);
  // 替换 ul
  const ulInnerHtml = createUlInnerHtml(currentNewsData);
  // 替换 分页
  const paginationInnerHtml = createPaginationInnerHtml();
  $(".news-list").html(ulInnerHtml);
  $(".pagination").html(paginationInnerHtml);
  return $.html();
};

function createPaginationInnerHtml() {
  // 向上取整 获取要显示的页面数量
  const pageCount = Math.ceil(newsData.length / pageSize);
  const prePageIndex =  Math.max(currentPageIndex - 1,1) 
  const nextPageIndex = Math.min(currentPageIndex + 1,pageCount) 
  let result = `<a href="?p=${prePageIndex}" class="prev">⌜</a>`
  for (let index = 1; index <= pageCount; index++) {
      result += `<a href="?p=${index}">${index}</a>`
  }
  result += `<a href="?p=${nextPageIndex}" class="next">⌝</a>`
  return result
}

function getCurrentNewsData() {
  // newsData
  // p = 1
  // pageSize = 5
  // newsData slice
  // star (p - 1) * pageSize
  //   const p = 2;
  const start = (currentPageIndex - 1) * pageSize;
  const end = start + pageSize;
  return newsData.slice(start, end);
}

function createUlInnerHtml(newsData) {
  let result = "";
  newsData.forEach((data) => {
    result += createLiDom(data);
  });
  return result;
}

function createLiDom(data) {
  return `
            <li class="news">
                <a href="javascript:;">
                    <img src="${data.imgUrl}" alt="">
                </a>
                <div>
                    <h3>
                        <a href="/detail?id=${data.id}">${data.title}</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>${data.from}</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;${data.newTime}</span>
                    </div>
                </div>
            </li>
    `;
}
