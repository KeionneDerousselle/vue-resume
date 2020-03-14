<template>
  <app-section section-title="Education">
    <div class="section-container overflow-hidden">
      <div class="w-100">
        <div
          class="education-icon text-center"
          data-aos="zoom-in"
          data-aos-duration="1500">
          <i class="material-icons md-48">school</i>
        </div>
      </div>
      <div
        class="w-100 education-section"
        data-aos="slide-left"
        data-aos-duration="1500">
        <h3>
          <div class="education-title">
            <span>Neumont University</span>
            <span>2015</span>
          </div>
        </h3>
        <hr>
        <p>Bachelor of Science in Computer Science</p>
        <p>Graduated Cum Laude with a GPA of 3.54 out of a possible 4.0</p>
      </div>
      <div
        class="w-100"
        data-aos="slide-right"
        data-aos-duration="1500">
        <h3>
          <div class="education-title">
            <span>Louisiana School for Math, Science, and the Arts</span>
            <span>2012</span>
          </div>
        </h3>
        <hr>
        <p>High School Diploma</p>
        <p>Graduated with a GPA of 3.2 out of a possible 4.0</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'

export default {
  components: {
    appSection: Section
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .education-icon {
    color: $green-darker;
  }

  .education-section {
    margin-bottom: 6rem;
  }

  .education-title {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    height: 3.2rem;
    color: $green-darker;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
