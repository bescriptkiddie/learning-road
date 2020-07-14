const http = require("http");
const fs = require("fs");
const mime = require("./data/mime.json");
const path = require("path");
const news = require('./news');
const detail = require('./detail');
const url = require('url');

// http
// req ->request 请求对象
// res ->response 响应对象
const server = http.createServer((req, res) => {
  // req.url
  console.log(req.url);
  const {pathname,query} = url.parse(req.url,true)
  ///?p=1
  res.setHeader("content-type", "text/html; charset=utf-8");
  if (pathname === "/") {
    // fs
    // const template = fs.readFileSync("./views/news.html");
    // 把处理 news 的逻辑单独放到 news.js 里面去
    // res.end(template);
    const p = +query.p;
    res.end(news(p))
  } else if (pathname === "/detail") {
    const id = query.id;
    res.end(detail(id))
    // 流
    // const readStream = fs.createReadStream("./views/detail.html");
    // readStream.pipe(res);
    // res.end("详情");
  } else {
    // 返回 css 样式
    // 硬编码
    // 缺文件的后缀
    if(req.url.includes("favicon.ico"))return;
    const extname = path.extname(req.url);
    const mimeType = mime[extname];
    res.setHeader("content-type", `${mimeType}; charset=utf-8`);
    // 加载 css 写死了
    // 静态资源加载
    const file = fs.readFileSync("./static" + req.url);
    res.end(file);
  }
});

server.listen(8080);
