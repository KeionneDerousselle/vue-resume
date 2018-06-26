<template>
  <h3 class="header-tertiary">
    {{ text }}
  </h3>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .header-tertiary {
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-size: 1.8rem;
    font-weight: 700;
    height: 3.2rem;
  }
</style>
