import VueReactivity from './index.js';
import {isObject, def, hasOwn} from './libs.js';
import Dep from './Dep.js';

class Observer {

    constructor(value) {

        def(value, '__ob__', this);
        // value.__ob__ = this;

        this.walk(value)

    }

    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }

}

function defineReactive(obj, key, val, shallow) {
    val = obj[key];

    // let watchers = [];
    let dep = new Dep();

    // 如果val还是一个对象，那么就递归处理val的observe
    // console.log('val', obj, key, val);
    let childOb = !shallow && observe(val);

    Object.defineProperty(obj, key, {
        get: function reactiveGetter () {
            console.log('get');
            const value = val;

            if (Dep.target) {
                // wathcers.push(VueReactivity.cb);
                dep.depend();
            }

            return value;
        },
        set: function reactiveSetter (newVal) {
            // console.log('set');
            const value = val;

            // 值没有发生改变
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }

            val = newVal;

            // wathcers.forEach(watcher => {
            //     watcher();
            // })
            dep.notify();
        }
    })
}

function observe(value) {

    if (!isObject(value)) {
        return
    }

    let ob;

    // 避免对已经被 observe 的对象进行再次 observe
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }

    return ob;
}

export {
    observe
}