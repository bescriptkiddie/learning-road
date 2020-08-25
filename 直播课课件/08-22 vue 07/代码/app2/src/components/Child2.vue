<template>
  <div>
    Child1

    <button @click="onAbc">按钮</button>
  </div>
</template>

<script>
import eventBus from '@/eventBus';


export default {
  name: 'Child2',

  inject: ['a', 'appVm'],

  data() {
    return {
      abc: 'kkb'
    }
  },

  methods: {
    onAbc() {
      eventBus.$emit('changeAbc', this.abc);

      child2.$emit('change');

      // <Child @click="fn" />
      // child2.$on('change', fn);
    }
  },

  mounted() {
    console.log(this.$attrs);
    console.log(this.a);
    console.log(this.appVm);
  }
}
</script>