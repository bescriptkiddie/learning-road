<template>
    <div id="main">
        <h3>用户中心</h3>
        <ul class="left">
            <router-link tag="li" :to="{name: 'User'}">基本信息</router-link>
            <router-link tag="li" :to="{name: 'UserCart'}">我的购物车</router-link>
        </ul>

        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>


<style>
.left {
    float: left;
    width: 200px;
}
.left li {
    line-height: 30px;
    cursor: pointer;
}
</style>