<template>
  <section>
    <h3>{{ sectionTitle }}</h3>
    <hr>
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      sectionTitle: {
        type: String,
        required: true
      }
    }
  };
</script>

<style scoped>
  section h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #878359;
  }

  section hr {
    border-top: 1px solid #878359;
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
