//socket.io
const Koa = require("koa");
const moment = require("moment");

const http = require("http");
const serve = require("koa-static");
const app = new Koa();
app.use(serve(__dirname + "/static"));

const server = http.createServer(app.callback());

const userManager = require("./user-manager");
var io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("connection");

  console.log(socket.id);

  socket.on("joinChatRoom", (data) => {
    console.log(data);
    // 存一下user
    const { username } = data;
    userManager.addUser(socket.id, username);

    // 当前用户 - 欢迎加入聊天室
    socket.emit("message", createMessage("欢迎加入聊天室", "开课吧"));

    // 广播给其他用户 - 欢迎 xx 来到了聊天室
    socket.broadcast.emit(
      "message",
      createMessage(`${username} 加入聊天室`, "开课吧")
    );
  });

  socket.on("chatMessage", (data) => {
    console.log(data);
    // 基于用户id
    // username
    // xxx.pm
    const userInfo = userManager.findUserById(socket.id);

    const { username } = userInfo;
    io.emit("message", createMessage(data, username));
  });

  socket.on("disconnect", (data) => {
    console.log("离开");

    const userInfo = userManager.findUserById(socket.id);
    if (userInfo) {
      const { username } = userInfo;
      // 广播给其他用户 -  xx 离开了聊天室
      socket.broadcast.emit(
        "message",
        createMessage(`${username} 离开了聊天室`, "开课吧")
      );
    }
  });
});

function createMessage(msg, username) {
  const date = moment().format("LT");
   
  return {
    msg,
    date,
    username,
  };
}

server.listen(8080);
