<template>
  <nav
    id="resume-nav"
    class="navbar navbar-expand-lg navbar-dark sticky-top">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarLinksSection"
      aria-controls="navbarLinksSection"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarLinksSection"
      class="collapse navbar-collapse">
      <div class="nav-container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              v-scroll-to="`#home`"
              class="nav-link"
              href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#about`"
              class="nav-link"
              href="#about">About Me</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#skills`"
              class="nav-link"
              href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#experience`"
              class="nav-link"
              href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#education`"
              class="nav-link"
              href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#awards`"
              class="nav-link"
              href="#awards">Awards</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="`#contact-me`"
              class="nav-link"
              href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  nav {
    background-color: $black;

    &.sticky-top {
      top: -0.1rem;
    }

    .nav-container {
      margin-left: auto;
      margin-right: auto;
    }

    #navbarLinksSection {
      background-color: inherit;
    }

    .navbar-nav .nav-item .nav-link {
      font-size: 1.4rem !important;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0.3rem;
      margin-right: 2rem;
      color: $white !important;
      user-select: none;
      text-transform: uppercase;
      letter-spacing: 0.3rem;

      &::after {
        content: "";
        display: block;
        margin: auto;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.5s ease, background-color 0.5s ease;
      }

      &:hover::after {
        width: 100%;
        background: $tan;
      }

      &.active {
        color: $tan !important;
      }
    }
  }
</style>
