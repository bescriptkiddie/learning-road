<template>
  <div>
    Child1
    <hr>
    <Child2 v-bind={...$attrs} />
  </div>
</template>

<script>
import Child2 from '@/components/Child2'
export default {
  name: 'Child1',

  props: ['a', 'b'],

  mounted() {
    // console.log(this.$parent);

    // console.log(this);
    // console.log(this.$attrs);
    // console.log(this.$listeners);

    // this.$parent.$el.style.background = 'red';
  },

  components: {
    Child2
  }
}
</script>