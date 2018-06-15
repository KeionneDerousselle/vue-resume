<template>
  <div id="app">
    <app-header></app-header>
    <div class="container content">
      <app-skills>
      </app-skills>
      <app-experience>
      </app-experience>
      <app-education>
      </app-education>
      <app-awards>
      </app-awards>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';
  import Experience from './components/experience/Experience.vue';
  import Skills from './components/skills/Skills.vue';
  import Education from './components/education/Education.vue';
  import Awards from './components/awards/Awards.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
      appSkills: Skills,
      appExperience: Experience,
      appEducation: Education,
      appAwards: Awards
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

  .btn-green {
    border: 2px solid #7d9389;
    color: #7d9389;

    &:hover {
      background-color: #7d9389;
      color: #fff;
      opacity: 0.9;
    }
  }

  .btn-white {
    border: 2px solid #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #7d9389;
      opacity: 0.9;
    }
  }
</style>
