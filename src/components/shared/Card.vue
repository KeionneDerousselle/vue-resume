<template>
  <div class="app-card">
    <div class="app-card__side app-card__side--front" :style="{ transform : isOnFront ? 'none' : 'rotateY(180deg)'}" @click="isOnFront = false">
      <div class="shadow">
      <div class="title-container">
        <slot name="front"></slot>
      </div>
      <div class="btn-container">
        <button class="btn btn-white" @click="isOnFront = false">
          See More
        </button>
      </div>
      </div>
    </div>
    <div class="app-card__side app-card__side--back" :style="{ transform : !isOnFront ? 'rotateY(0deg)' : 'rotateY(180deg)'}">
      <slot name="back"></slot>
      <div class="btn-container">
        <button class="btn btn-green" @click="isOnFront = true">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOnFront: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  .app-card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 50rem;

    &__side {
      transition: all 0.8s ease;
      position: absolute;
      height: 50rem;
      top: 0;
      left: 0;
      width: 100%;
      backface-visibility: hidden;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba(#000, 0.3);

      h4 {
        font-size: 1.15em;
      }

      h5 {
        font-size: 1.05em;
      }

      &--front {
        background-color: #7d9389;
        color: #fff;
        display: flex;
        flex-direction: column;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: all 0.8s ease;

        &:hover .shadow {
          background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
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

      &--back {
        color: #7d9389;
        transform: rotateY(180deg);
      }
    }
  }

  .btn {
    padding: 0 26px;
    height: 40px;
    min-width: 150px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 0;
    text-align: center;
    margin-right: 8px;
    margin-bottom: 24px;
    background-color: transparent;
    transition: all 0.3s ease;
  }

  .btn-green {
    border: 2px solid #7d9389;
    color: #7d9389;

    &:hover {
      background-color: #7d9389;
      color: #fff;
      opacity: 0.9;
    }
  }

  .btn-white {
    border: 2px solid #fff;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #7d9389;
      opacity: 0.9;
    }
  }
</style>

