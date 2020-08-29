<template>
  <div id="app">
    <KHeader />

    <router-view></router-view>
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