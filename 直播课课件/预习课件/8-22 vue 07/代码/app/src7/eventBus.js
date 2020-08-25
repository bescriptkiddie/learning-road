import Vue from 'vue';

// let eventBus = {
//     a: 1,
//     listeners: [],
//     set(val) {
//         this.a = val;
//         this.listeners.forEach(fn => {
//             fn();
//         })
//     },
//     on(fn) {
//         this.listeners.push(fn);
//     }
// };

// eventBus.on(function() {
//     console.log('123');
// })
// eventBus.set(100);


let eventBus = new Vue();


export default eventBus;

