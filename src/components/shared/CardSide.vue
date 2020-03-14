<template>
  <div
    class="card-side"
    @click="onCardClicked()">
    <slot name="card-content" />
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
}
</script>

<style lang="scss">
  .card-side {
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    transition: all 0.8s ease;
    position: absolute;
    height: 52rem;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-box-shadow: 0 0.5rem 2rem rgba(#000, 0.3);
    -moz-box-shawdow: 0 0.5rem 2rem rgba(#000, 0.3);
    box-shadow: 0 0.5rem 2rem rgba(#000, 0.3);
    border-radius: 0.3rem;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    -webkit-flex-direction: column;

    &:hover {
      -webkit-transform: translateY(-1.5rem) scale(1.03);
      transform: translateY(-1.5rem) scale(1.03);
      -webkit-box-shadow: 0 2rem 4.5rem rgba(#000, 0.3);
      -moz-box-shawdow: 0 2rem 4.5rem rgba(#000, 0.3);
      box-shadow: 0 2rem 4.5rem rgba(#000, 0.3);
    }

    h3,
    h4 {
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.15em;
    }

    h4 {
      font-size: 1.05em;
    }

    .card-content-container {
      min-height: 43rem;
      height: 43rem;
    }

    .card-btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 992px) {
      .card-btn-container {
        height: auto;
        min-height: auto;
      }
    }
  }
</style>
