<template>
  <h1 class="header-primary">
    <div class="container">
      <span class="header-primary--main">{{ mainText }}</span>
      <span class="header-primary--sub">{{ subText }}</span>
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      required: true
    },

    subText: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/variables.scss";

  .header-primary {
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
    .header-primary--main {
      font-size: 3.5rem;
    }

    .header-primary--sub {
      font-size: 3rem;
    }
  }
</style>
