<template>
  <app-section class="awards">
    <h2
      class="section__title awards__title"
      data-aos="zoom-in"
      data-aos-duration="650"
      data-aos-offset="0">
      <span class="fas fa-medal section-title__icon awards__icon" />
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
  .award:not(:last-of-type) {
    margin-bottom: 5rem;
  }
</style>
