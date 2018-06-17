<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
      <app-nav></app-nav>
      <div class="container content-padding">
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
  html,
  body,
  #app {
    height: 100vh;
    margin: 0;
  }

  body {
    position: relative;
  }

  #app {
    background-color: #e7e7e4;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #1b1b18;
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
    padding: 40px 0px;
  }

  .btn {
    padding: 0 26px;
    height: 40px;
    min-width: 150px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 0;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 24px;
    background-color: transparent;
    transition: all 0.3s ease;
  }

  .btn-outline-white {
    border: 2px solid #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #7d9389;
      opacity: 0.9;
    }
  }

  .btn-outline-green {
    border: 2px solid #7d9389;
    color: #7d9389;

    &:hover {
      background-color: #7d9389;
      color: #fff;
      opacity: 0.9;
    }
  }

  .hover-white {
    &:hover {
      background-color: #fff;
      color: #7d9389;
      opacity: 0.9;
    }
  }

  .hover-green {
    &:hover {
      background-color: #7d9389;
      color: #fff;
      opacity: 0.9;
    }
  }

  .material-icons.md-18 {
    font-size: 18px;
  }

  .material-icons.md-24 {
    font-size: 24px;
  }

  .material-icons.md-36 {
    font-size: 36px;
  }

  .material-icons.md-48 {
    font-size: 48px;
  }
  
  h4 {
    font-size: 1.15em;
  }

  h5 {
    font-size: 1.05em;
  }
</style>
