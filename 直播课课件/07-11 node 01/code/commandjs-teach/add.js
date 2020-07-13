// commandjs  早于 esm

console.log("add file")
const add = (a, b) => {
  return a + b;
};

// 如何导出
// nodejs 导出
// module.exports = add
// 简单版本 

// 原理
// const exports = module.exports = {}
// exports.add = add;
exports = add;
// module.exports = {
//     add: add
// }


// nodejs 
// module.exports




