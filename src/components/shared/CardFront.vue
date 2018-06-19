<template>
  <app-card-side class="side-front" :onCardClicked="onFrontSideClicked">
    <div slot="card-content" class="shadow">
      <div class="card-content-container container">
      <div class="title-container">
        <h4 class="w-100">{{ title }}</h4>
        <slot name="content"></slot>
      </div>
      </div>
      <div class="card-btn-container">
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
  @import "../../styles/variables.scss";

  .side-front {
    background-color: $green-darker;
    color: $white;
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    transition: all 0.8s ease;

    .shadow {
      height: 100%;
      width: 100%;
    }

    &:hover .shadow {
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }

    .title-container{
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
