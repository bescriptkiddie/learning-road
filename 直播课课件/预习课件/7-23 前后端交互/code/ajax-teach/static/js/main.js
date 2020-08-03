import ajax from "./ajax.js";

const getBtn = document.querySelector("#getBtn");
const postBtn = document.querySelector("#postBtn");

ajax({
  url: "/postData",
  method: "post",
  data: {
    name: "h",
    age: 20,
  },
  success(res) {
    console.log(res);
  },
});

getBtn.onclick = () => {
  ajax({
    url: "/getData",
    data: {
      name: "h",
      age: 20,
    },
    success(res) {
      console.log(res);
    },
  });
};
