<template>
  <app-section class="education">
    <h2
      class="section__title education__title"
      data-aos="zoom-in"
      data-aos-duration="650"
      data-aos-offset="0">
      <span class="fas fa-graduation-cap section-title__icon education__icon" />
      <span>Education</span>
    </h2>

    <div
      v-for="institution in education"
      :key="institution.institutionName"
      class="institution"
      data-aos="fade"
      data-aos-duration="650"
      data-aos-offset="0">
      <h3 class="institution__title">
        <span>{{ institution.institutionName }}</span>
        <span>{{ institution.graduationYear }}</span>
      </h3>
      <p>{{ institution.accreditation }}</p>
      <p>{{ institution.gpaDescription }}</p>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'
import education from '../../assets/data/education'

export default {
  components: {
    appSection: Section
  },
  data: () => ({
    education
  })
}
</script>

<style lang="scss">
  .institution:not(:last-of-type) {
    margin-bottom: 5rem;
  }

  .institution__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
