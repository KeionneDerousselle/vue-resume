<template>
  <app-section class="awards">
    <h2
      class="awards__title"
      data-aos="zoom-in"
      data-aos-duration="650"
      data-aos-offset="0">
      <span class="fas fa-medal awards__icon" />
      <span>Awards</span>
    </h2>

    <div
      v-for="award in awards"
      :key="award"
      class="award"
      data-aos="fade"
      data-aos-duration="650"
      data-aos-offset="0">
      <h3>{{ award.name }}</h3>
      <div>{{ award.description }}</div>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'
import awards from '../../assets/data/awards'

export default {
  components: {
    appSection: Section
  },
  data: () => ({
    awards
  })
}
</script>

<style lang="scss">
  .award {
    display: block;
    font-size: $default-font-size;
  }

  .award:not(:last-of-type) {
    margin-bottom: 5rem;
  }

  .awards__title {
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .awards__icon {
    color: $green-darker;
    font-size: 2.64rem;
    margin-right: 2rem;
  }
</style>
