<template>
  <div id="app">
    <app-header id="home" />
    <div class="content">
      <app-nav />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-awards />
    </div>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Nav from './components/shared/Nav.vue'
import About from './components/about/About.vue'
import Skills from './components/skills/Skills.vue'
import Experience from './components/experience/Experience.vue'
import Education from './components/education/Education.vue'
import Awards from './components/awards/Awards.vue'
import Footer from './components/shared/Footer.vue'

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
}
</script>

<style lang="scss">
  @import "./styles/variables.scss";
  // TODO: create base styles file and import it
  html {
    font-size: 62.5%;
    /* 62.5% of the font size size set by the user or browser*/
  }

  html,
  body,
  #app {
    height: 100vh;
    margin: 0;
  }

  body {
    position: relative;
    overflow-x: hidden;
    // TODO: move to typography folder
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: $default-font-size;
    line-height: 1.7;
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
</style>
