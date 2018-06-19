<template>
  <app-card-side class="card-side side-back" :onCardClicked="onBackSideClicked">
    <div slot="card-content">
      <div class="back-title flex-center">
        <h4 class="text-center">{{ title }}</h4>
      </div>
      <div class="back-content container">
        <slot name="content"></slot>
      </div>
      <div class="btn-container">
        <button class="btn btn-outline-green" @click="onBackSideClicked()">
          Back
        </button>
      </div>
    </div>
  </app-card-side>
</template>

<script>
  import CardSide from "./CardSide.vue";

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
  };
</script>

<style lang="scss">
  @import "../../styles/variables.scss";

  .side-back {
    color: $green-darker;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);

    .back-title {
      h4 {
        padding: $space;
      }
    }

    .back-content {
      min-height: 24rem;
      height: 24rem;
    }

    .btn-container {
      padding: 2rem 0;
      height: inherit;
    }

    @media (min-width: 992px) {
      .back-title {
        height: 6rem;
      }

      .back-content {
        height: 14rem;
      }
    }
  }
</style>
