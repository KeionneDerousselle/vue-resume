<template>
  <header id="home">
    <div class="header-parallax">
      <div class="header-padding">
        <div class="header-title">
          <div class="container">
            <h1>Keionne Derousselle</h1>
            <h2>Software Developer</h2>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  header {
    height: 100%;
  }

  .header-parallax {
    height: 100%;
    background-image: url("../../assets/headerImage.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
  }

  .header-title h2 {
    font-weight: 700;
    letter-spacing: 3px;
  }
</style>

