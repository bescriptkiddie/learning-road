import VueReactivity from './vue-reactivity/index.js';

let usernameElement = document.querySelector('#username');
let genderElement = document.querySelector('#gender');
let btnElement = document.querySelector('#btn');
let tplElement = document.querySelector('#tpl');

let data = {
    username: 'zMouse',
    gender: '男',
    article: {
        title: '标题',
        content: '内容'
    }
};

// Object.defineProperty(data, 'x', {
//     value: 100,
//     configurable: false
// })

// Object.defineProperty(data, 'y', {
//     get() {

//     },
//     set() {

//     }
// })

let app = new VueReactivity({
    data: data
});

console.log('app', app);

// {{}} => 组件为单位的

app.$watch('gender', function(val, oldVal) {
    console.log('我是cb', val, oldVal);
});

// let v = app.$watch(function() {
//     return this.a;
// });

btnElement.onclick = function() {
    app.$data.username = usernameElement.value;
    app.$data.gender = genderElement.value;

    // 在数据发生改变的时候，主动去调用渲染
    // 数据 改变 以后 一定要记得调用对应想视图渲染的方法
    // renderUser();
}
genderElement.onchange = function() {
    app.$data.gender = genderElement.value;
}


// renderUser => 数据发生改变以后要做的事情，观察者
renderUser();



function renderUser() {
    let tplElement = document.querySelector('#tpl');
    tplElement.innerHTML = `
        <dt>用户名：${data.username}</dt>
        <dd></dd>
        <dt>性别：${data.gender}</dt>
        <dd></dd>
    `
}