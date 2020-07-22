const socket = io("ws://localhost:8080");

const sendBtn = document.querySelector("#sendBtn");
const msgInput = document.querySelector("#msg");
const chatMessagesContainer = document.querySelector(".chat-messages");

// 取 username
//username
let params = new URL(document.location).searchParams;
let username = params.get("username"); // is the string "Jonathan Smith".
console.log(username);

// 登录
socket.emit("joinChatRoom", {
  username,
});

sendBtn.onclick = () => {
  const msg = msgInput.value;
  socket.emit("chatMessage", msg);
  msgInput.value = "";
  return false;
};

socket.on("message", (data) => {
  console.log(data);

  const msgElement = document.createElement("div");
  msgElement.classList.add("message");

  const { msg, date, username } = data;
  msgElement.innerHTML = `<p class="mate">${username} ${date}</p><p>${msg}</p>`;

  chatMessagesContainer.append(msgElement);
});
