<template>
  <app-section section-title="Experience">
    <div class="row">
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>Willis Towers Watson</h4>
            <h5>Software Developer</h5>
            <h5>SCRUM Master</h5>
            <h4>Jun 2015 - Present</h4>
          </div>
          <div slot="back">
            <h4>Willis Towers Watson</h4>
          </div>
        </app-card>
      </div>
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>Pluralsight</h4>
            <h4>Student Developer</h4>
            <h4>Jan 2015 - Jun 2015</h4>
          </div>
          <div slot="back">
            <h4>Pluralsight</h4>
          </div>
        </app-card>
      </div>
      <div class="col-md">
        <app-card>
          <div slot="front">
            <h4>International Document</h4>
            <h4>Services</h4>
            <h4>Student Developer</h4>
            <h4>Sept 2015 - Dec 2015</h4>
          </div>
          <div slot="back">
            <h4>International Document</h4>
            <h4>Services</h4>
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
