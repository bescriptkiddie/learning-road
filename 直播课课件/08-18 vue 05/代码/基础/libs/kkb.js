// 如果一个三方库需要对Vue进行扩展，不推荐直接全局这么写
// Vue 提供了一个规范化的接口去对其进行扩展

// export default function(_Vue, options) {

// }

// export default {
//     install(_Vue, options) {

        // _Vue.prototype.getData = function() {
        //     console.log('getData 获取数据');
        // }

//     }
// }

export default class KKB {
    
    static f(_Vue, options) {
        _Vue.prototype.getData = function() {
            console.log('getData 获取数据');
        }
    }

    install(_Vue, options) {
        _Vue.prototype.getData = function() {
            console.log('getData 获取数据');
        }
    }

}