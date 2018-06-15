<template>
  <div>
    <div class="about-icon">
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

<style>
.about-icon {
  text-align: center;
  color: #7d9389;
}
</style>
