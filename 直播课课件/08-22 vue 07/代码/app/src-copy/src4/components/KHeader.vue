<template>
    <header id="header">
        <a href="/" id="logo"></a>

        <nav id="nav">
            <a href="">手机</a>
            <a href="">笔记本</a>
            <a href="">家居</a>
        </nav>

        <div id="user">

            <router-link :to="{name:'User'}">用户中心</router-link>


            <a href="">登录</a>
            <a href="">注册</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'KHeader'
}
</script>