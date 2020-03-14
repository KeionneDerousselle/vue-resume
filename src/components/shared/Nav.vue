<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark sticky-top">
    <button
      class="navbar-toggler navbar__toggle-button"
      type="button"
      data-toggle="collapse"
      data-target="#navbar__collapse-container"
      aria-controls="navbar__collapse-container"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class=" navbar-toggler-icon navbar__toggle-button-icon" />
    </button>

    <div
      id="navbar__collapse-container"
      class="collapse navbar-collapse navbar__collapse-container">
      <div class="navbar__links-container">
        <ul class="navbar-nav navbar__links">
          <li
            v-for="navLink in navLinks"
            :key="navLink.title"
            class="navbar__link-item">
            <a
              v-scroll-to="navLink.href"
              class="nav-link navbar__link"
              :href="navLink.href">{{ navLink.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/variables.scss";

  .navbar {
    background-color: $black;

    &.sticky-top {
      top: -0.1rem;
    }

    .navbar__toggle-button {
      font-size: 2rem;

    .navbar__toggle-button-icon {
        color: $white;
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    .navbar__links-container {
      margin-left: auto;
      margin-right: auto;
    }

    .navbar__collapse-container {
      background-color: inherit;
    }

    .navbar__links .navbar__link-item .navbar__link {
      font-size: 1.4rem;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0.3rem;
      margin-right: 2rem;
      color: $white;
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
