const http = require("http");
const fs = require("fs");
const path = require('path');
const mimeData = require('./data/mime.json');
const news = require('./news.js');
const detail = require('./detail');
const url = require('url');

// http
// req 请求对象
// res 响应对象
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("content-type", "text/html;charset=utf-8");
  const {pathname,query} = url.parse(req.url,true)
  // console.log(urlInfo)
  if (pathname === "/") {
    // const homePage = fs.readFileSync("./index.html");
    // res.end(homePage)
    const p = query.p  
    res.end(news(p))
  } else if (pathname === "/detail") {
    const { id } = query;
    res.end(detail(id))
    // const readStream = fs.createReadStream("./detail.html");
    // readStream.pipe(res);
    // res.end("详情");
  } else {
    // res.end("hello world");
    // 静态资源加载
    // 读取css文件
    if(req.url.includes("/favicon.ico"))return;
    const extname = path.extname(req.url)
    console.log("--------")
    console.log(extname)

    const mimeType = mimeData[extname]
    res.setHeader("content-type", `${mimeType};charset=utf-8`);
    console.log("-------url------")
    console.log(req.url)
    const css = fs.readFileSync("."+req.url);
    res.end(css);
  }
});

server.listen(8083);
