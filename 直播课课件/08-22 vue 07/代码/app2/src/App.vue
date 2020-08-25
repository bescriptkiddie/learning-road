<template>
  <div id="app">
    <h1>App - {{val}}</h1>
    <hr>
    <div>
     <Child1 a="1" b="2" c="100" @childclick="fn" />
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus';
import Child1 from './components/Child1.vue'

export default {
  name: 'App',

  data() {
    return {
      val: ''
    }
  },

  components: {
    Child1
  },

  provide() {
    return {
      a: 1,
      appVm: this
    }
  },

  methods: {
    fn() {}
  },

  mounted() {
    //  console.log('children', this.$children);

    //  this.$children[0].$el.style.background = 'red';

    eventBus.$on('changeAbc', val => {
      console.log('val', val);
      this.val = val;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
