<template>
  <app-section class="awards">
    <div class="section-container">
      <p
        v-for="(award, index) in awards"
        :key="award"
        class="award"
        data-aos="fade"
        :data-aos-delay="index == 0 ? 0 : (index * 550)"
        data-aos-duration="650">
        {{ award }}
      </p>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'

export default {
  data() {
    return {
      awards: [
        'Neumont Merit Scholarship',
        "President's List",
        "Dean's List",
        'Featured Student'
      ]
    }
  },
  components: {
    appSection: Section
  }
}
</script>

<style lang="scss">
  .award {
    display: block;
    margin-bottom: 1.6rem;
    font-size: $default-font-size;
  }
</style>
