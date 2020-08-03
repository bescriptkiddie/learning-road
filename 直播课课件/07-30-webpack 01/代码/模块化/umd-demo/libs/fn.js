//  这个M函数的作用：为不同的环境定义模块

function M(factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        // 这里 通过 axios 模拟的参数的机制，但是我的代码是不能运行，注意
        module.exports = factory( require('./axios.js') );
    }
    else if (typeof define === "function" && define.amd) {
      	// AMD 模块环境下
        define(['./axios.js'], factory);
    }
}

M( function(axios) {
    function fn() {
        console.log('fn', axios);
    }

    return {
        fn
    }
} );

