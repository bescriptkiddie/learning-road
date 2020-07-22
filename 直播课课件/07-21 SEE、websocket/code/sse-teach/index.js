const http = require("http");
const fs = require("fs");
const moment = require("moment");

const server = http.createServer((req, res) => {
  // fs
  // 接口 sse
  if (req.url === "/sse") {
    // 必须设置成 event-stream
    res.setHeader("content-type", "text/event-stream");

    // data: xxxxx\n\n
    setInterval(() => {
      res.write("event: kkb\n")
      res.write(`data: ${getDate()}\n\n`);
    }, 1000);

    // 一定不要写 end

    // sse
  } else {
    // 静态服务
    const readStream = fs.createReadStream("./static/index.html");
    readStream.pipe(res);
  }
});

function getDate() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}

server.listen(3000);
