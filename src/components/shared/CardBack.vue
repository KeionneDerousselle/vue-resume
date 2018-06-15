<template>
  <app-card-side class="card-side side-back" :onCardClicked="onBackSideClicked">
    <div slot="card-content">
      <div class="back-title">
        <h4>{{ title }}</h4>
      </div>
      <div class="container back-content">
        <slot name="content"></slot>
      </div>
      <div class="btn-container">
        <button class="btn btn-green" @click="onBackSideClicked()">
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
  .side-back {
    color: #7d9389;
    transform: rotateY(180deg);

    .back-title {
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        text-align: center;
      }
    }

    .back-content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 14rem;
    }
  }
</style>
