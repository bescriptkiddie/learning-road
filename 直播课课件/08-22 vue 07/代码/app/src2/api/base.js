import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';

const APIURL = {
    item: {
        getItems: '/items'
    },
    user: {
        login: '/login'
    }
}

// 如果应用需要有多个不同的接口应用实例
// const instance1 = axios.create({
//     baseURL: '/api1',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

// const instance2 = axios.create({
//     baseURL: '/api2',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

// 如果应用只有一种统一接口配置
axios.defaults.baseURL = BASEURL;

export {
    axios,
    APIURL
};