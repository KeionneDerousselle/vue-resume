<template>
  <div class="progress-bar">
    <div
      class="progress-bar progress-bar--filled"
      :data-aos="`progress-bar--filled-${percent - 5}`"
      data-aos-duration="2000"
      data-aos-offset="0" />
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @for $i from 60 through 100 {
    [data-aos="progress-bar--filled-#{$i}"] {
      width: 0%;
      transition-property: width;
      &.aos-animate {
        width: $i + 0%;
      }
    }
  }

  .progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: #e2e2e2;
    height: 2.8rem;
    margin: 0 0 1.5rem 0;
    border-radius: 3px;
    align-items: flex-end;

    .progress-bar--filled {
      top: 0;
      left: 0;
      position: absolute;
      background-color: $green-darker;
      padding: 0;
      opacity: 1;
    }
  }
</style>
