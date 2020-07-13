// add 移动到一个单独的文件
// 导入
// ./  / 
// 补齐
// .js || .json || .node
// const add = require('./add');
// console.log(add(1, 1));
// console.log(add)

// 如果不是文件的话
// 尝试看看是不是文件夹
// 1. package.json  里面的 main 字段 
// 2. 找里面的 index.js ||.json || .node
// const sub = require('./sub');
// console.log(sub)

// 如果不是 ./ / 开头的话
// 加载内置模块 第三方模块
// const http = require('http');
// console.log(http)

// 文件夹以及文件同名
// const add = require('./add');
// console.log(add)

// 第三方模块
// const atest = require('atest');
// console.log(atest)
const lodash = require('lodash');
console.log(lodash)