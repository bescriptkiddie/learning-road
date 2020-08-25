import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

// 构建仓库
let store = new Vuex.Store({
    // 数据存储的位置，和组件的data一样，也是响应式的
    state: {
        // a: [1,2,3]
        a: 1
    },


    mutations: {
        changeA(state, payload) {
            state.a = payload;

            // setTimeout(() => {
            //     state.a = payload;
            // }, 1000);

            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         state.a = payload;

            //         resolve();
            //     }, 1000);
            // });
        }
    },

    actions: {
        changeA(store, payload) {

            // return 1;
            
            // 从后端拉取数据
            let data = payload;
            store.commit('changeA', data);

            return new Promise((resolve) => {
                
                setTimeout(() => {
                    // store.state.a = payload;
                    store.commit('changeA', data);

                    resolve();
                }, 1000);
            });
        }
    }
});



// commit('changeA', 1)

// function vuex () {
//     function commit(name, payload) {
//         mutations[name](state, payload);
//     }

//     async function dispatch(name, payload) {
//         await mutations[name](state, payload);
//     }

//     return {
//         commit
//     }
// }



// new Promise(() => {
//     // 这里的代码一定必须是一个异步的代码吗？
// })



export default store;

