<template>
  <app-section section-title="Awards" id="awards">
    <div class="awards-section">
      <h4
        v-for="(award, index) in awards"
        :key="award"
        data-aos="fade"
        :data-aos-delay="index == 0 ? 0 : (index * 650)"
        data-aos-duration="650"
      >
        {{ award }}
      </h4>
    </div>
  </app-section>
</template>

<script>
  import Section from "../shared/Section.vue";

  export default {
    data(){
      return {
        awards: [
          'Neumont Merit Scholarship',
          'President\'s List',
          'Dean\'s List',
          'Featured Student'
        ]
      }
    },
    components: {
      appSection: Section
    }
  };
</script>

<style lang="scss" scoped>
  .awards-section {
    margin: 2rem 0;
  }
</style>
