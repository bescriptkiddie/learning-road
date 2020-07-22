const WebSocket = require("ws");
const moment = require("moment");
const wss = new WebSocket.Server({
  port: 8080,
});

let isOpen = false;
wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    console.log(msg);
    if(msg === "open"){
        isOpen = true
    }
    if(msg === "close")
    {
        isOpen = false
    }
  });

  // server -> client send data
  setInterval(() => {
    if (isOpen) {
      ws.send(getDate());
    }
  }, 1000);

  console.log("connection");
});

function getDate() {
  return moment().format("YYYY-MM-DD HH:mm:ss");
}
