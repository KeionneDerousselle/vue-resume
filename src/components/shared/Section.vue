<template>
  <section
    :id="id"
    class="section">
    <div class="container">
      <h2
        :id="sectionTitleId"
        class="section__header">
        {{ sectionTitle }}
      </h2>
      <div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },

    sectionTitleId: {
      type: String,
      default: ''
    },

    sectionTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .section {
    padding: 15rem 0;
  }

  .section__header {
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: 2rem;
    font-weight: 600;
    color: $tan-green;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid $tan-green;
    margin-bottom: 6rem;
  }

  .section h4 {
    font-size: 1.15rem;
    font-weight: 500;
  }

  .section h5 {
    font-size: 1.05rem;
    font-weight: 500;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>
