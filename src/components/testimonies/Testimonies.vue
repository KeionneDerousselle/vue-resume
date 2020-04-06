<template>
  <app-section class="testimonies">
    <carousel
      id="testimonies-carousel"
      class="testimonies-carousel"
      :items="testimonies"
      :active="0">
      <div
        v-for="(testimony, index) in testimonies"
        :key="`crsl-item-${index}-content-key`"
        :slot="`crsl-item-${index}`"
        class="testimony__content">
        <div>
          <div class="testimony__quote-container testimony__quote-container--left">
            <i class="material-icons testimony__quote testimony__quote--left">format_quote</i>
          </div>
          <p class="testimonial__quote-text">
            {{ testimony.quote }}
          </p>
          <div class="testimony__quote-container testimony__quote-container--right">
            <i class="material-icons testimony__quote testimony__quote--right">format_quote</i>
          </div>
        </div>
        <div class="testimonial__author">
          {{ testimony.author.name }}
        </div>
        <div class="testimonial__author-info">
          {{ testimony.author.company }}, {{ testimony.author.position }}
        </div>
      </div>
    </carousel>
  </app-section>
</template>
<script>
import Carousel from '../shared/Carousel'
import Section from '../shared/Section.vue'
import testimonies from '../../assets/data/testimonies'

export default {
  components: {
    'app-section': Section,
    Carousel
  },

  data: () => ({
    testimonies
  })
}
</script>
<style lang="scss">
// .testimonies {
//   height: 100vh;

//   .container {
//     height: 100vh;

//     .testimonies-carousel {
//       height: 100vh;
//     }
//   }
// }

@include tablet {
  .testimonies {
    height: 76.5rem;

    .container {
      height: 100%;

      .testimonies-carousel {
        height: 100%;
      }
    }
  }
}

.testimony__content {
  text-align: center;
}

.testimonial__quote-text {
  margin: 1.5rem 0;
  padding: 0;
}

.testimony__quote-container {
  display: flex;
}

.testimony__quote-container--left {
  justify-content: flex-start;
  align-items: center;
}

.testimony__quote-container--right {
  justify-content: flex-end;
  align-items: center;
}

.testimony__quote {
  color: $green-darker;
  display: block;
}

.testimony__quote--left {
  transform: rotateY(180deg);
}

</style>
