<template>
  <header>
    <div class="header-parallax">
      <span id="headerImage" role="img" aria-label="Laptop and plant">
        <span class="inner"></span>
      </span>
      <!-- <div class="header-padding">
        <div class="header-title">
          <div class="container">
            <h1>Keionne Derousselle</h1>
            <h2>Software Developer</h2>
          </div>
        </div>
      </div> -->
    </div>
  </header>
</template>

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
    }
  }

  @media (min-width: 900px) {
    .header-parallax #headerImage {
      background-image: url("../../assets/900.jpg");
    }
  }

  @media (min-width: 1500px) {
    .header-parallax #headerImage {
      background-position: bottom;
      background-image: url("../../assets/1500.jpg");
    }
  }

  @media (min-width: 1920px) {
    .header-parallax #headerImage {
      background-position: bottom;
      background-image: url("../../assets/4000.jpg");
    }
  }

  .header-padding {
    padding-top: 90px;
  }

  .header-title {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: $white;
    text-transform: uppercase;
  }

  .header-title h1,
  .header-title h2 {
    font-weight: 700;
  }

  .header-title h1 {
    letter-spacing: 6px;
    font-size: 2rem;
  }

  .header-title h2 {
    font-weight: 700;
    letter-spacing: 3px;
    font-size: 1.5rem;
  }

  @media (min-width: 567px) {
    .header-title h1 {
      font-size: 2.3rem;
    }

    .header-title h2 {
      font-size: 1.8rem;
    }
  }
</style>

