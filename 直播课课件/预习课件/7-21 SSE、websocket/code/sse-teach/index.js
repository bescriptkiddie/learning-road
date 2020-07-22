const fs = require("fs");
const http = require("http");
const moment = require("moment");

// request -> 请求对象
// response
const server = http.createServer((req, res) => {
  if (req.url === "/sse") {
    // 流
    res.setHeader("content-type", "text/event-stream");
    res.statusCode = 200;

    // data: xxxxxxx\n\n
    // event: 自定义事件名
    res.write(`event: test\n`);
    res.write(`data: ${getDate()}\n\n`);
    setInterval(() => {
      res.write(`data: ${getDate()}\n\n`);
    }, 1000);
  } else {
    res.setHeader("content-type", "text/html");
    const readStream = fs.createReadStream("./static/index.html");
    readStream.pipe(res);
  }
  // 1. index.html
  // 2. /sse
});

function getDate() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

server.listen(8080);
