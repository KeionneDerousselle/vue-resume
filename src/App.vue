<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';

  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
  html, body, #app {
    height: 100%;
    width: 100%;
  }
</style>
