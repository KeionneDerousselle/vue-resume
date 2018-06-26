<template>
  <div class="about-paragraph">
    <div class="about-icon margin-bottom-medium text-center">
      <i class="material-icons md-48">{{ icon }}</i>
    </div>
    <p>
      {{ text }}
    </p>
  </div>

</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .about-paragraph {
    p {
      margin-bottom: 1.6rem;
    }
  }

  .about-icon {
    color: $green-darker;
    height: $space;
  }
</style>
