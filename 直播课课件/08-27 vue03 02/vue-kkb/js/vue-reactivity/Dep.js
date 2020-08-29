
export default class Dep {
    static target;

    constructor() {
        this.subs = [];
    }

    depend() {
        if (Dep.target) {
            this.subs.push(Dep.target);
        }
    }

    notify() {
        const subs = this.subs.slice();

        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
        }
    }
}