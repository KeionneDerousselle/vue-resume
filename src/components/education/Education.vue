<template>
  <app-section section-title="Education" id="education">
    <div class="education-icon">
      <i class="material-icons md-48">school</i>
    </div>
    <div class="row">
      <div class="col-md">
        <h4>Neumont University, Salt Lake City, UT</h4>
        <h4>Bachelor of Science in Computer Science</h4>
        <h4>Graduated cum laude with a GPA of 3.54 out of a possible 4.0</h4>
      </div>
      <div class="col-md">
        <h4>Louisiana School for Math, Science, and the Arts, Nachitoches, LA</h4>
        <h4>High School Diploma</h4>
        <h4>Graduated with a GPA of 3.2 out of a possible 4.0</h4>
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
  .education-icon {
    color: #7d9389;
    text-align: center;
  }
</style>
