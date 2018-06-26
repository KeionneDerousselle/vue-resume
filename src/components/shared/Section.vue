<template>
  <section>
    <div class="container">
      <app-header-secondary :id="id" :text="sectionTitle"/>
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderSecondary from "./typography/HeaderSecondary";

  export default {
    props: {
      id: {
        type: String
      },
      sectionTitle: {
        type: String,
        required: true
      }
    },
    components: {
      appHeaderSecondary: HeaderSecondary
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

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
