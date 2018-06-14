<template>
  <app-section section-title="Experience">
    <div class="row">
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>Willis Towers Watson, UT</h4>
            <h4>Software Developer</h4>
            <h4>SCRUM Master</h4>
            <h4>June 2015 - Present</h4>
          </div>
        </app-card>
      </div>
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>Pluralsight, UT</h4>
            <h4>Student Developer</h4>
            <h4>Jan 2015 - Jun 2015</h4>
          </div>
        </app-card>
      </div>
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>International Document Services, UT</h4>
            <h4>Student Developer</h4>
            <h4>Sept 2015 - Dec 2015</h4>
          </div>
        </app-card>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Card from "../shared/Card.vue";
  import Section from "../shared/Section.vue";

  export default {
    components: {
      appCard: Card,
      appSection: Section
    }
  };
</script>

<style>
</style>
