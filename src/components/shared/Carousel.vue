<template>
  <div
    :id="id"
    class="carousel slide"
    data-ride="carousel">
    <div class="carousel-inner carousel__items">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['carousel-item', { active: index === active }]"
        :data-interval="slideInterval">
        <slot
          :name="`crsl-item-${index}`"
          :item="item" />
      </div>
    </div>
    <ol class="carousel-indicators">
      <li
        v-for="(item, index) in items"
        :key="`carousel-control-${index}`"
        :data-target="`#${id}`"
        :data-slide-to="index"
        :class="{active: index === active}" />
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },

    items: {
      type: Array,
      required: true
    },

    active: {
      type: Number,
      default: 0
    },

    slideInterval: {
      type: Number,
      default: 6000
    }
  },

  data: ({ active }) => ({
    activeItem: active
  }),
}
</script>
<style lang="scss">
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel__items {
  width: 100%;
  display: flex;
  align-items: center;
}

@include tablet {
  .carousel__items {
    width: 85%;
    display: flex;
    align-items: center;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: static;
  width: auto;
}

.carousel-control-prev,
.carousel-control-next,
.carousel-control-prev:focus,
.carousel-control-next:focus  {
  color: $green-darker;
  font-weight: bold;
  opacity: 1;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  color: $green-darkest;
}

.carousel-control__icons {
  font-size: 4rem;
}

.carousel-indicators {
  margin-top: 4rem;
  position: static;
  width: 60%;

  li {
    background-color: $green-darker;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
