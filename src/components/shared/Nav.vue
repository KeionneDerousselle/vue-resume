<template>
  <nav id="resume-nav" class="navbar sticky-top">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#awards">Awards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  nav {
    height: 60px;
    background-color: #000;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      list-style-type: none;

      li {
        display: inline-block;
        cursor: pointer;
        user-select: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        .nav-link {
          font-size: 12px;
          padding-right: 24px;
          color: #fff;
          text-decoration: none;

          &:hover, &.active {
            color: #b0a68d;
          }
        }
      }
    }
  }
</style>
