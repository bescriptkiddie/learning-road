const http = require("http");
const fs = require("fs");
const path = require('path');
const mimeData = require('./mime.json');

// http
// req 请求对象
// res 响应对象
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("content-type", "text/html;charset=utf-8");

  if (req.url === "/home") {
    const homePage = fs.readFileSync("./index.html");
    res.end(homePage);
  } else if (req.url === "/detail") {
    const readStream = fs.createReadStream("./detail.html");
    readStream.pipe(res);
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

server.listen(9093);
