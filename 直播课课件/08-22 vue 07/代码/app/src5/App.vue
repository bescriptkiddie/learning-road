<template>
  <div id="app">
    
    <header>
      <router-link :to="{name: 'Main'}">Main</router-link>
      <span> | </span>
      <router-link :to="{name: 'View'}">View</router-link>
      <span> | </span>
      <router-link :to="{name: 'List'}">List</router-link>
    </header>

    <transition>
      <router-view style="margin-top: 100px"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style >
  
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: grey;
    font-size: 40px;
  }

</style>