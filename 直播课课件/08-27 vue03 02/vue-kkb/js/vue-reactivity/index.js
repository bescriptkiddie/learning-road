import {observe} from './Observer.js';
import Watcher from './Watcher.js';

class VueReactivity {

    static cb;

    constructor(opts) {

        this.$data = opts.data;

        // this.$data = this._data;

        observe(this.$data);

    }

    
    // 注册数据观察者
    // expOrFn: 要观察的数据
    // cb: expOrFn发生变化以后要执行的函数
    // addEventListener
    // 通过 watch 进行 cb 的收集，把它们存在在 expOrFn 对应的 cb 管理器
    $watch(expOrFn, cb) {
        // VueReactivity.cb = cb;
        // this.$data[expOrFn];

        new Watcher(this, expOrFn, cb);
    }

}




export default VueReactivity;