export default class MyEvent {
    constructor() {
        this.handler = {};
    }
    // 添加事件
    addEvent(eventName, fn) {
        // 保存事件
        if (typeof this.handler[eventName] === 'undefined') {
            this.handler[eventName] = [];
        }
        this.handler[eventName].push(fn);
    }
    trigger(eventName) {
        if (typeof this.handler[eventName] === "undefined") {
            return;
        }
        this.handler[eventName].forEach(v => {
            v();
        })
    }
    // 作业：补全移除事件方法
    removeEvent(eventName, fn) {
        // 补全方法；
        if (typeof this.handler[eventName] === 'undefined') {
            return;
        }
        for (let i = 0; i < this.handler[eventName].length; i++) {
            if (this.handler[eventName][i] === fn) {
                // 把方法删除；
                this.handler[eventName].splice(i, 1);
                break;
            }
        }

    }


}