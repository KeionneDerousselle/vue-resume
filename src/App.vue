<template>
  <div id="app">
    <app-header></app-header>
    <div class="container content">
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
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/shared/Header.vue";
  import Footer from "./components/shared/Footer.vue";

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  };
</script>

<style lang="scss">
  html,
  body,
  #app {
    height: 100vh;
    margin: 0;
  }

  #app {
    background-color: #e7e7e4;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1b1b18;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding: 40px 0px;
  }

  .section {
    color: #878359;
  }

  .section h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #878359;
  }
</style>
