console.log("main");
import myAxios from "./axios.js";

// 点击登录
const loginBtn = document.querySelector("#login");
const getDataBtn = document.querySelector("#get");

loginBtn.addEventListener("click", async () => {
  const res = await myAxios.post("/login", {
    username: "h",
    password: "123",
  });

  // 存
  localStorage.setItem("token", "Bearer" + res.data.data.token);

  console.log(res.data);
});

getDataBtn.addEventListener("click", async () => {
  // 处理
  try {
    const res = await myAxios.get("/getData");
    console.log(res.data);
  } catch (e) {
    console.log("aaalkdjflsdkj");
  }
});
