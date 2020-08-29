<template>
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">
            <div v-if="user">
                <router-link :to="{name:'User'}">{{user.name}}</router-link>
                <span @click="layout">退出</span>
            </div>
            <div v-else>
                <router-link :to="{name: 'Login'}">登录</router-link>
                <router-link :to="{name: 'Register'}">注册</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'KHeader',

        computed:{
            user(){
                return this.$store.state.user
            }
        },
        methods: {
            layout() {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                window.location.reload();
            },
        },
    };
</script>
