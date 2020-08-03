import axios from "./axios.js";
const loginBtn = document.querySelector("#login");
const getDataBtn = document.querySelector("#getData");

loginBtn.addEventListener("click", async () => {
  const res = await axios.post("/login", {
    username: "h",
    passwd: "123",
  });
  console.log(res.data);

  const token = res.data.data.token;
  localStorage.setItem("token", "Bearer " + token);
});

getDataBtn.addEventListener("click", async () => {
  try {
    const res = await axios.get("/getData");
    console.log(res.data);
  } catch (e) {
    console.log("aaaaaalsjfalksdj");
  }
});
