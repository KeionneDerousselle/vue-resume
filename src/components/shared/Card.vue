<template>
  <div class="app-card">
    <app-card-front
      :style="{
        transform : isOnFront ? 'none' : 'rotateY(-180deg)',
        '-webkit-transform': isOnFront ? 'none' : 'rotateY(-180deg)'
      }"
      :on-front-side-clicked="handleFrontClicked"
      :title="cardTitle">
      <slot
        slot="content"
        name="front" />
    </app-card-front>

    <app-card-back
      :style="{
        transform : !isOnFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
        '-webkit-transform': !isOnFront ? 'rotateY(0deg)' : 'rotateY(180deg)'
      }"
      :on-back-side-clicked="handleBackClicked"
      :title="cardTitle">
      <slot
        slot="content"
        name="back" />
    </app-card-back>
  </div>
</template>

<script>
import CardFront from './CardFront.vue'
import CardBack from './CardBack.vue'

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
    }
  },

  components: {
    appCardFront: CardFront,
    appCardBack: CardBack
  },

  methods: {
    handleFrontClicked() {
      this.isOnFront = false
    },

    handleBackClicked() {
      this.isOnFront = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    -webkit-perspective: 150rem;
    position: relative;
    height: 52rem;
  }
</style>
