<template>
  <div id="app">
    <app-header id="home"></app-header>
    <div class="content">
      <app-nav></app-nav>
      <div class="content-padding">
        <app-about>
        </app-about>
        <app-skills></app-skills>
        <app-experience>
        </app-experience>
        <app-education>
        </app-education>
        <app-awards>
        </app-awards>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/shared/Header.vue";
  import Nav from "./components/shared/Nav.vue";
  import About from "./components/about/About.vue";
  import Skills from "./components/skills/Skills.vue";
  import Experience from "./components/experience/Experience.vue";
  import Education from "./components/education/Education.vue";
  import Awards from "./components/awards/Awards.vue";
  import Footer from "./components/shared/Footer.vue";

  export default {
    components: {
      appHeader: Header,
      appNav: Nav,
      appAbout: About,
      appSkills: Skills,
      appExperience: Experience,
      appEducation: Education,
      appAwards: Awards,
      appFooter: Footer
    }
  };
</script>

<style lang="scss">
  @import "./styles/variables.scss";

  html,
  body,
  #app {
    height: 100vh;
    margin: 0;
  }

  body {
    position: relative;
    overflow-x: hidden;
  }

  #app {
    background-color: #e7e7e4;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: $black-light;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  .content-padding {
    padding: 2rem 0px;
  }
</style>
