<template>
  <header>
    <div class="header-parallax">
      <div class="header-title">
        <h1>Keionne Derousselle</h1>
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
    background-image: url('../../assets/headerImage.jpg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: top;
    background-attachment: fixed;
  }

  .header-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: inherit;
  }

  h1 {
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
  }
</style>

