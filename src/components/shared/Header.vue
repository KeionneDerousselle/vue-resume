<template>
  <header>
    <div class="header__parallax">
      <span
        role="img"
        aria-label="Laptop and plant"
        class="header__parallax-img">
        <div class="header__text-container">
          <h1 class="header__text">
            <div class="container">
              <span class="header__text--main">Keionne Derousselle</span>
              <span class="header__text--sub">Software Engineer</span>
            </div>
          </h1>
        </div>
        <span class="inner" />
      </span>
    </div>
  </header>
</template>

<style lang="scss">
  .header__parallax .header__parallax-img {
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
    .header__parallax .header__parallax-img {
      background-image: url("../../assets/400.jpg");
    }
  }

  @media (min-width: 540px) {
    .header__parallax .header__parallax-img {
      background-image: url("../../assets/540.jpg");
      .inner {
        padding-top: 65.56%;
      }
    }
  }

  @media (min-width: 900px) {
    .header__parallax .header__parallax-img {
      background-image: url("../../assets/900.jpg");
      .inner {
        padding-top: 65.56%;
      }
    }
  }

  @media (min-width: 1500px) {
    .header__parallax .header__parallax-img {
      background-position: bottom;
      background-image: url("../../assets/1500.jpg");
      .inner {
        padding-top: 65.53%;
      }
    }
  }

  @media (min-width: 1920px) {
    .header__parallax .header__parallax-img {
      background-position: bottom;
      background-image: url("../../assets/4000.jpg");
      .inner {
        padding-top: 65.5%;
      }
    }
  }

  .header__text-container {
    top: 3.2rem;
    position: absolute;
    width: 100%;
  }

  .header__text {
    background: linear-gradient(rgba($black, .7), rgba($black, .7));
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: $white;
    text-transform: uppercase;
    font-weight: 700;

    &--main {
      display: block;
      letter-spacing: .6rem;
      font-size: 3.2rem;
      margin-bottom: .8rem;
    }

    &--sub {
      display: block;
      letter-spacing: .3rem;
      font-size: 2.4rem;
    }
  }

  @media (min-width: 567px) {
    .header__text--main {
      font-size: 3.5rem;
    }

    .header__text--sub {
      font-size: 3rem;
    }
  }
</style>
