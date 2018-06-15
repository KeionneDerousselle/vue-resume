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
    transition: all 0.8s ease;
    position: absolute;
    height: 50rem;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);
    display: flex;
    flex-direction: column;

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

    .title-container,
    .btn-container {
      height: 25rem;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
    }
  }
</style>
