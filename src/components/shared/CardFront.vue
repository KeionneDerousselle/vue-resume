<template>
  <app-card-side class="card-side side-front" :onCardClicked="onFrontSideClicked">
    <div slot="card-content" class="shadow">
      <div class="title-container container">
        <h4>{{ title }}</h4>
        <slot name="content"></slot>
      </div>
      <div class="btn-container">
        <button class="btn btn-outline-white" @click="onFrontSideClicked()">
          See More
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
        type: String
      },
      onFrontSideClicked: {
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
  .side-front {
    background-color: #7d9389;
    color: #fff;
    transition: all 0.8s ease;

    .title-container {
      text-align: center;
      flex-direction: column;
    }

    .shadow {
      height: 100%;
      width: 100%;
    }

    &:hover .shadow {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }
  }
</style>
