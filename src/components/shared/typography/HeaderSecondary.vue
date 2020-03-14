<template>
  <h2 class="header-secondary">
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/variables.scss";

  .header-secondary {
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2rem;
    font-weight: 600;
    color: $tan-green;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid $tan-green;
    margin-bottom: 6rem;
  }
</style>
