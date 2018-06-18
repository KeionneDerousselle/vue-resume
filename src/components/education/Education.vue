<template>
  <app-section section-title="Education" id="education">
    <div class="education-container">
      <div class="w-100">
        <div class="education-icon text-center" data-aos="zoom-in" data-aos-duration="1500">
          <i class="material-icons md-48">school</i>
        </div>
      </div>
      <div class="w-100 education-section" data-aos="slide-left" data-aos-duration="1500">
        <div class="education-title">
          <h4>Neumont University</h4>
          <h4>2015</h4>
        </div>
        <hr>
        <h5>Bachelor of Science in Computer Science</h5>
        <h5>Graduated cum laude with a GPA of 3.54 out of a possible 4.0</h5>
      </div>
      <div class="w-100 education-section" data-aos="slide-right" data-aos-duration="1500">
        <div class="education-title">
          <h4>Louisiana School for Math, Science, and the Arts</h4>
          <h4>2012</h4>
        </div>
        <hr>
        <h5>High School Diploma</h5>
        <h5>Graduated with a GPA of 3.2 out of a possible 4.0</h5>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Section from "../shared/Section.vue";

  export default {
    components: {
      appSection: Section
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .education-container {
    margin-top: $space;
  }

  .education-icon {
    color: $green-darker;
  }

  .education-section {
    margin-bottom: 5rem;
  }

  .education-title {
    text-transform: uppercase;
    color: $green-darker;
    margin-bottom: 1rem;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      font-weight: 700;
    }
  }
</style>
