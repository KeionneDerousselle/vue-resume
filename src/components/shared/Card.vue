<template>
  <div class="app-card">
    <app-card-front :style="{
        transform : isOnFront ? 'none' : 'rotateY(-180deg)',
        '-webkit-transform': isOnFront ? 'none' : 'rotateY(-180deg)'
      }" :onFrontSideClicked="handleFrontClicked" :title="cardTitle">
      <slot name="front" slot="content"></slot>
    </app-card-front>

    <app-card-back :style="{
        transform : !isOnFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
        '-webkit-transform': !isOnFront ? 'rotateY(0deg)' : 'rotateY(180deg)'
      }" :onBackSideClicked="handleBackClicked" :title="cardTitle">
      <slot name="back" slot="content"></slot>
    </app-card-back>
  </div>
</template>

<script>
  import CardFront from "./CardFront.vue";
  import CardBack from "./CardBack.vue";

  export default {
    props: {
      cardTitle: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        isOnFront: true
      };
    },

    components: {
      appCardFront: CardFront,
      appCardBack: CardBack
    },

    methods: {
      handleFrontClicked() {
        this.isOnFront = false;
      },

      handleBackClicked() {
        this.isOnFront = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .app-card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    -webkit-perspective: 150rem;
    position: relative;
    height: 50rem;
    -webkit-box-shadow: 0 .5rem 2rem rgba(#000, 0.3);
    -moz-box-shawdow: 0 .5rem 2rem rgba(#000, 0.3);
    box-shadow: 0 .5rem 2rem rgba(#000, 0.3);
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      -webkit-transform: translateY(-1.5rem) scale(1.03);
      transform: translateY(-1.5rem) scale(1.03);
      -webkit-box-shadow: 0 2rem 4.5rem rgba(#000, 0.3);
      -moz-box-shawdow: 0 2rem 4.5rem rgba(#000, 0.3);
      box-shadow: 0 2rem 4.5rem rgba(#000, 0.3);
    }
  }
</style>

