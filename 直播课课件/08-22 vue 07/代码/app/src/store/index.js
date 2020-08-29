import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '@/api'

Vue.use(Vuex);

// 构建仓库
let store = new Vuex.Store({
    // 数据存储的位置，和组件的data一样，也是响应式的
    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
    },

    mutations: {
        uploadUser(state,payload){
            state.user = payload
        }
    },

    actions: {
        // 只与数据操作有关系 -> 只做数据逻辑
        async login(store, payload) {
            try {
                let rs = await api.login(payload);
                store.commit('uploadUser',rs.data)
                localStorage.setItem('user', JSON.stringify(rs.data));
                localStorage.setItem('token', rs.headers.authorization);
            } catch (e) {
                throw (e);
            }
        },
    },
});

export default store;

