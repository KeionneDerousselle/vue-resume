<template>
  <header>
    <div class="header-parallax">
      <span
        id="headerImage"
        role="img"
        aria-label="Laptop and plant">
        <div class="header-padding">
          <app-header-primary
            main-text="Keionne Derousselle"
            sub-text="Software Developer" />
        </div>
        <span class="inner" />
      </span>
    </div>
  </header>
</template>

<script>
import HeaderPrimary from './typography/HeaderPrimary'

export default {
  components: {
    appHeaderPrimary: HeaderPrimary
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .header-parallax #headerImage {
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    font: 0/0 serif;
    text-shadow: none;
    color: transparent;
    background-image: url("../../assets/320.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    background-attachment: fixed;

    .inner {
      padding-top: 65.5%;
      display: block;
      height: 0;
    }
  }

  @media (min-width: 400px) {
    .header-parallax #headerImage {
      background-image: url("../../assets/400.jpg");
    }
  }

  @media (min-width: 540px) {
    .header-parallax #headerImage {
      background-image: url("../../assets/540.jpg");
      .inner {
        padding-top: 65.56%;
      }
    }
  }

  @media (min-width: 900px) {
    .header-parallax #headerImage {
      background-image: url("../../assets/900.jpg");
      .inner {
        padding-top: 65.56%;
      }
    }
  }

  @media (min-width: 1500px) {
    .header-parallax #headerImage {
      background-position: bottom;
      background-image: url("../../assets/1500.jpg");
      .inner {
        padding-top: 65.53%;
      }
    }
  }

  @media (min-width: 1920px) {
    .header-parallax #headerImage {
      background-position: bottom;
      background-image: url("../../assets/4000.jpg");
      .inner {
        padding-top: 65.5%;
      }
    }
  }

  .header-padding {
    top: 3.2rem;
    position: absolute;
    width: 100%;
  }
</style>
