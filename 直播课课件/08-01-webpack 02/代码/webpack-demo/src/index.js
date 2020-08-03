import logo from './images/logo.png';
// import css from './css/css.css';
import './css/css.css';
import fn from './fn.js';
import todo from './todo.js';

// 如果看不懂 import export 这些东西，奉劝大家赶紧去看相关的知识点～

let image = new Image();
image.src = logo;
document.body.appendChild(image);

// console.log(val);

let btn = document.querySelector('button');

btn.onclick = function() {
    fn();
}


//如果开启 HMR
if (module.hot) {
    // 类似事件监听
    module.hot.accept('./fn.js', function() {
        console.log('fn模块变化了');

        btn.onclick = function() {
            fn();
        }
    });

    module.hot.accept('./todo.js', function() {
        console.log('todo模块变化了');
    });
}