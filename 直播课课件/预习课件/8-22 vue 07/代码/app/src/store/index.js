import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 返回的是一个用于管理维护以及提供数据修改接口的对象
// 和组件通信规范一样，数据最好有一些规则（规范），保证数据操作的安全性
let store = new Vuex.Store({

    // 存储基础数据，类似组件中的 data
    state: {
        title: '开课吧',
        user: {
            name: '紫薯',
            gender: '男'
        }
    },

    // 类似组件中的 computed
    getters: {
        titleUser(state) {
            return `我是 ${state.title} 的 ${state.user.name}`
        }
    },

    // 存储的就是修改数据的方法，统一数据修改的入口，比较规范且容易维护如控制
    mutations: {        
        editTitle(state, payload) {
            state.title = payload;

            // setTimeout(() => {
            //     state.title = payload;
            // }, 1000);
        }
    },

    // action不直接修改数据，state 的修改还是要依靠 mutation
    actions: {
        editTitle(store, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // state.title = payload;
                    store.commit('editTitle', payload)
                    resolve();
                }, 1000);
            });
        }
    }

});

console.log('store', store);

export default store;