<template>
  <div id="app">
    <app-header></app-header>
    <div class="container content">
      <div class="section">
        <h3>Skills</h3>
        <hr>
      </div>
      <div class="section">
        <h3>Experience</h3>
        <hr>
        <div class="title-row">
          <h4>Willis Towers Watson, UT</h4>
          <h4>June 2015 - Present</h4>
        </div>
        <h5>Software Developer and SCRUM Master</h5>
        <ul>
          <li>Re-wrote a legacy applications using ReactJS, Webpack, and ES6</li>
          <li>Added several new features to many internal and external products and tools</li>
          <li>Provided maintenance and sought out improvements to increase the stability and functionality of legacy projects</li>
          <li>Implemented unit,  integration, and end-to-end tests</li>
          <li>Facilitated discussion amongst  team members and tasks to push towards iterative development, best practices, continuous delivery, and continuous integration, and build pipeline improvements</li>
          <li>Organized sprint review, planning, and retrospective meetings as SCRUM Master</li>
        </ul>
      </div>
      <div class="section">
        <h3>Education</h3>
        <hr>
      </div>
      <div class="section">
        <h3>Awards</h3>
        <hr>
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

  .section h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #878359;
  }

  .section hr {
    border-top: 1px solid #878359;
  }

  .section h4 {
    font-size: 1.15rem;
    font-weight: 500;
  }

  .section h5 {
    font-size: 1.05rem;
    font-weight: 500;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>
