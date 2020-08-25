import KKB from '../libs/kkb.js';
import KCom1 from './KCom1.js';

// Vue.use( KKB.f, {
//     a: 1
// } );

Vue.use( new KKB, {
    a: 1
} );

let app = new Vue({
    el: '#app',
    components: {
        // KCom1: {
        //     template: `
        //         <div>
        //             KCom1 组件
        //         </div>
        //     `
        // },

        KCom1
    }
})