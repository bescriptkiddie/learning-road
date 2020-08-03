// 生产坏境的前缀
// 生产坏境  localhost:8081
// 开发坏境  localhost:8080

const DEV = "dev";
const PROD = "prod";
const env = DEV;

// axios.get("/getData")
// http://localhost:8080/getData
const myAxios = axios.create({
  baseURL: env === DEV ? "http://localhost:8080" : "http://localhost:8081",
  timeout: 4000,
});

// 结合 jwt
// 请求拦截器
myAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// 响应拦截器的应用
// 统一处理错误
myAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err.response);
    if (err.response.status === 401) {
      alert("please go to login");
    }

    return Promise.reject(err);
  }
);

export default myAxios;

// 痛点
// axios.get("生成坏境/getData")
// axios.get("开发坏境/getData")

// api
// 开发坏境
// 生成坏境
