<template>
  <div id="main">
    
    <ul>
      <li v-for="i of 100" :key="i">View - {{i}}</li>
    </ul>

  </div>
</template>

<script>

export default {
    name: 'Main'
}
</script>

<style>
  li {
    margin: 10px 0;
    background: #eee;
    font-size: 60px;
  }  
</style>