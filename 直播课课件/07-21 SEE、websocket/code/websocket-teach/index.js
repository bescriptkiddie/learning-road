const { Server } = require("ws");
const moment = require("moment");

const wss = new Server({
  port: 3000,
});

wss.on("connection", (ws) => {
  console.log("hi");

  let intervalCount;
  // 接受数据
  ws.on("message", (data) => {
    console.log(data);

    if (data === "start") {
      // 推送数据
      // 请求 db 
      // 给到前端
      intervalCount = setInterval(() => {
        ws.send(getDate());
      }, 1000);
    } else if (data === "stop") {
      //停止推送数据
      clearInterval(intervalCount);
    }
  });
});

function getDate() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}
