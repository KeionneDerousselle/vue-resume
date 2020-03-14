<template>
  <app-card-side
    class="side-back"
    :on-card-clicked="onBackSideClicked">
    <div slot="card-content">
      <div class="card-content-container">
        <div class="back-title flex-center">
          <h3 class="text-center">
            {{ title }}
          </h3>
        </div>
        <div class="back-content container">
          <slot name="content" />
        </div>
      </div>
      <div class="card-btn-container">
        <button
          class="btn btn-outline-green"
          @click="onBackSideClicked()">
          Back
        </button>
      </div>
    </div>
  </app-card-side>
</template>

<script>
import CardSide from './CardSide.vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    onBackSideClicked: {
      type: Function,
      required: true
    }
  },

  components: {
    appCardSide: CardSide
  }
}
</script>

<style lang="scss">
  @import "../../styles/variables.scss";

  .side-back {
    color: $green-darker;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);

    .back-title {
      h3 {
        padding: 4rem;
      }
    }

    .btn-container {
      padding: 2rem 0;
      height: inherit;
    }

    @media (min-width: 992px) {
      .back-content {
        min-height: 28rem;
      }
    }
  }
</style>
