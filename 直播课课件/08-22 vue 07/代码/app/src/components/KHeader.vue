<template>
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">

            

            <!-- {{a}}
            <button @click="changeA">{{$store.state.a}}</button> -->

            <router-link :to="{name:'User'}">这里替换成登录以后的用户名</router-link>

            <router-link :to="{name: 'Login'}">登录</router-link>
            <a href="">注册</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'KHeader',

    // data() {
    //     return {
    //         a: this.$store.state.a
    //     }
    // },

    computed: {
        a() {
            return this.$store.state.a
        }
    },

    created() {
        // console.log(this.$store.state);
    },

    methods: {
        async changeA() {
            // 能修改的，但是不推荐
            // this.$store.state.a++;
            // this.$store.state.a.push( this.$store.state.a.length+1 )

            // 推荐的修改方式
            // await this.$store.commit('changeA', this.a + 1);

            let rs = this.$store.dispatch('changeA', this.a + 1);

            console.log(rs, this.a);

            // 但是，它不处理异步
        }
    }
}
</script>