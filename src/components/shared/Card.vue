<template>
  <div class="app-card">
    <div class="app-card__side app-card__side--front">
      <slot name="front"></slot>
    </div>
    <div class="app-card__side app-card__side--back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .app-card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 50rem;

    &__side {
      background-color: #fff;
      transition: all 0.8s ease;
      position: absolute;
      height: 50rem;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      color: #7d9389;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba(#000, .15);

      &--front {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &--back {
        transform: rotateY(180deg);
      }
    }

    &:hover &__side--front {
      transform: rotateY(180deg);
    }

    &:hover &__side--back {
      transform: rotateY(0deg);
    }
  }
</style>

