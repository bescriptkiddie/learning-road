// 创建自己的 axios
// 痛点
// 坏境
// 生产坏境 http://localhost:8081
// 测试坏境 http://localhost:8080

const DEV = "dev";
const PROD = "PROD";

const baseURLMap = {
  [DEV]: "http://localhost:8080",
  [PROD]: "http://localhost:8081",
};

const currentEnv = DEV;
console.log(baseURLMap[currentEnv]);
//http://localhost:8080/getData
const myAxios = axios.create({
  baseURL: baseURLMap[currentEnv],
  timeout: 4000,
});

// 拦截器
// 请求拦截
myAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.authorization = token;
  }

  return config;
});

// 统一处理错误
// 响应拦截
myAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err.response);
    if (err.response.status === 401) {
      alert("please go to login ");
    }

    // return err
    return Promise.reject(err);
  }
);

export default myAxios;
