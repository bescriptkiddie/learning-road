console.log("main.js");
import ajax from "./ajax.js";

const getBtn = document.querySelector("#get");
const postBtn = document.querySelector("#post");

getBtn.addEventListener("click", (params) => {
  console.log("click");
  ajax({
    url: "/getData",
    data: {
      name: "xiaohong",
      age: 10,
    },
    success(res) {
      console.log(res);
    },
  });
});

postBtn.addEventListener("click", (params) => {
  ajax({
    url: "/postData",
    method:"post",
    data: {
      name: "xiaohong",
      age: 10,
    },
    success(res) {
      console.log(res);
    },
  });
});

// ajax({
//   url: "/xml",
//   method: "post",
//   data: {
//     hello: "你好",
//     height: "178cm",
//   },
//   success(res) {
//     console.log(res);
//   },
// });
