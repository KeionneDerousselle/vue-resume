<template>
  <div>
    <div class="about-icon margin-bottom-2 text-center">
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

  .about-icon {
    color: $green-darker;
    height: $space;
  }
</style>
