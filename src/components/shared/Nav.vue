<template>
  <nav id="resume-nav" class="navbar navbar-expand-md navbar-dark sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinksSection" aria-controls="navbarLinksSection" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarLinksSection">
      <div class="nav-container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home" v-scroll-to="`#home`">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" v-scroll-to="`#about`">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" v-scroll-to="`#skills`">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience" v-scroll-to="`#experience`">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education" v-scroll-to="`#education`">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#awards" v-scroll-to="`#awards`">Awards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-me" v-scroll-to="`#contact-me`">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  nav {
    background-color: #000;

    .nav-container {
      margin-left: auto;
      margin-right: auto;
    }

    #navbarLinksSection {
      background-color: inherit;
    }

    .navbar-nav .nav-item .nav-link {
      font-size: 14px !important;
      padding-right: 1.25rem !important;
      padding-left: 0;
      color: #fff !important;
      user-select: none;
      text-transform: uppercase;
      letter-spacing: 3px;

      &:hover,
      &.active {
        color: #b0a68d !important;
      }
    }
  }
</style>
