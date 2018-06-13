<template>
  <header>
    <div class="header-parallax">
      <div class="container">
        <div class="header-title">
          <h1>Keionne Derousselle</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
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

  .header-title {
    height: inherit;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #1b1b18;
    text-transform: uppercase;
    padding-top: 160px;
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

