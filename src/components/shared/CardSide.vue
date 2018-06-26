<template>
  <div class="card-side" @click="onCardClicked()">
    <slot name="card-content"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      onCardClicked: {
        type: Function,
        required: true
      }
    }
  };
</script>

<style lang="scss">
  .card-side {
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    transition: all 0.8s ease;
    position: absolute;
    height: 40rem;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    -webkit-flex-direction: column;

    h4,
    h5 {
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    h4 {
      font-size: 1.15em;
    }

    h5 {
      font-size: 1.05em;
    }

    .card-content-container {
      min-height: 30rem;
      height: 30rem;
    }

    .card-btn-container {
      height: 10rem;
      min-height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
