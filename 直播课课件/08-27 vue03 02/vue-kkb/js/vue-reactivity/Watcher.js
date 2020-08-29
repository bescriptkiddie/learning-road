import { parsePath } from './libs.js';
import Dep from './Dep.js';

export default class Watcher {

    constructor(
        vm,
        expOrFn,
        cb
    ) {

        this.vm = vm;
        this.expOrFn = expOrFn;
        this.cb = cb;

        // 返回一个 访问 expOrFn 所对应的数据的方法
        // expOrFn = 'article.title' => ['article', 'title']

        this.getter = parsePath(expOrFn);

        // getter 触发去访问 data 下的对应数据，从而出发这个数据 getter ，进行依赖的收集
        this.value = this.get();
    }

    get() {
        Dep.target = this;

        let $data = this.vm.$data;
        let value = this.getter.call(this.vm, $data);
        return value;
    }

    update() {
        // 获取现在最新的一个值
        const value = this.get();
        // 获取原来的值
        const oldValue = this.value;
        // 把watch的value更新成新的值
        this.value = value;
        try {
            this.cb.call(this.vm, value, oldValue)
        } catch (e) {
            handleError(e, this.vm, `callback for watcher "${this.expression}"`)
        }
    }

}