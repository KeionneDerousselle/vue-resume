<template>
  <section>
    <div class="container">
      <h3 :id="id">{{ sectionTitle }}</h3>
      <hr>
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      id: {
        type: String
      },
      sectionTitle: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  section h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
    font-weight: 600;
    color: $tan-green;
  }

  section hr {
    border-top: 1px solid $tan-green;
  }

  section h4 {
    font-size: 1.15rem;
    font-weight: 500;
  }

  section h5 {
    font-size: 1.05rem;
    font-weight: 500;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
</style>
