<template>
  <section
    :id="id"
    class="section">
    <div class="container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .section {
    padding: 15rem 0;
  }
</style>
