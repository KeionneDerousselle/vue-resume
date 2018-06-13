<template>
  <div id="app">
    <app-header></app-header>
    <div class="container body-content">
      <div class="section">
        <h3>Skills</h3>
      </div>
      <div class="section">
        <h3>Experience</h3>
      </div>
      <div class="section">
        <h3>Education</h3>
      </div>
      <div class="section">
        <h3>Awards</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/shared/Header.vue";

  export default {
    components: {
      appHeader: Header
    }
  };
</script>

<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    background-color: #e7e7e4;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1b1b18;
  }

  .body-content {
    padding: 40px 0px;
  }

  .section h3{
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
  }
</style>
