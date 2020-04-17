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
            <span class="fas fa-quote-left testimony__quote" />
          </div>
          <p class="testimonial__quote-text">
            {{ testimony.quote }}
          </p>
          <div class="testimony__quote-container testimony__quote-container--right">
            <span class="fas fa-quote-right testimony__quote" />
          </div>
        </div>
        <div class="testimonial__author">
          <a
            :href="testimony.author.link"
            target="__blank"
            class="testimonial__author-link">{{ testimony.author.name }}</a>
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
.testimony__content {
  text-align: center;
  font-size: 1.6rem;
  height: 57rem;
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
  font-size: 2rem;
  color: $green-darker;
  display: block;
}

.testimonial__author-link {
  text-decoration: none;
  color: $green-darkest;
  font-weight: bold;
  font-size: 1.5rem;
}

.testimonial__author-link:hover {
  text-decoration: none;
  color: $green-darker;
}

.testimonial__author-info {
  font-size: 1.4rem;
  color: $black-light;
}

@include mobile-md {
  .testimony__content {
    height: 49rem;
  }
}

@include mobile-lg {
  .testimony__content {
    height: 45rem;
  }
}

@include tablet {
  .testimony__quote {
  font-size: 3rem;
  }

  .testimony__content {
    font-size: 2rem;
    height: 45rem;
  }

  .testimonial__author-link {
    font-size: 1.8rem;
  }

  .testimonial__author-info {
    font-size: 1.6rem;
  }
}

@include laptop {
  .testimony__content {
    height: 40rem;
  }
}

</style>
