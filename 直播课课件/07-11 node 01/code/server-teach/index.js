const http = require("http");
const fs = require("fs");
const mime = require('./mime.json');
const path = require('path');

// http
// req ->request 请求对象
// res ->response 响应对象
const server = http.createServer((req, res) => {
  // req.url
  console.log(req.url);
  res.setHeader("content-type", "text/html; charset=utf-8");
  if (req.url === "/home") {
    // fs
    const template = fs.readFileSync("./template/index.html");
    res.end(template);
  } else if (req.url === "/detail") {
    // 流
    const readStream = fs.createReadStream("./template/detail.html");
    readStream.pipe(res);
    // res.end("详情");
  } else {
    // 返回 css 样式
    // 硬编码
    // 缺文件的后缀
    const extname = path.extname(req.url)
    const mimeType = mime[extname]
    res.setHeader("content-type", `${mimeType}; charset=utf-8`);
    const css = fs.readFileSync("./template/style.css");
    res.end(css);
  }
});

server.listen(8080);
