<template>
  <div id="app">
    <KHeader />

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import KHeader from '@/components/KHeader';

export default {
  name: 'App',
  components: {
    KHeader
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: none;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>