
// commandjs



// function add(a,b){
//     return a+b
// }

// 导入
// 相对路径 ./  ../
// 绝对路径 /
// /Users/cxr/Work/education/web高级/08/nodejs01/code/commandjs-teach
// 先当做文件来处理
// .js  || .json || .node
// 当做文件夹处理
// 1. 先找 package.json 里面的 main
// 2. index.js || json 


//内置模块 第三方模块

// const add = require('./add');
// console.log(add)


// const test = require('./test');
// console.log(test)
// const lodash = require('lodash');
// console.log(lodash)

const atest = require("atest")
console.log(atest)

// console.log(add(1,1))


// if(./ ../ || /)
// {
    // 尝试文件
    // .js || .json || .node
    // 尝试文件夹
    // 1. package.json main
    // 2. index.js || .json || .node  
    // 报错
// }else{
    // 1. 先做内置模块
    // 2. 第三方模块
    // 报错
// }
// else
// 报错