<template>
  <div class="home">
    <h2>Home</h2>
    <MyParent1></MyParent1>
  </div>
</template>

<script>
import MyParent1 from '@/components/MyParent1'

export default {
  name: 'Home',

  components: {
    MyParent1
  }
}
</script>
