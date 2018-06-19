<template>
  <div class="background-light">
    <app-section section-title="Experience">
      <div class="section-container">
        <app-job-cards :jobs="jobs">
        </app-job-cards>
      </div>
    </app-section>
  </div>
</template>

<script>
  import Section from "../shared/Section.vue";
  import JobCards from "./JobCards.vue";

  export default {
    data() {
      return {
        jobs: [
          {
            companyName: "Willis Towers Watson",
            jobTitle: "Software Developer",
            timeFrame: "Jun 2015 - Present",
            jobTasks: [
              "Legacy Application Rewrite",
              "Maintain and Improve Product Stability",
              "Automated Testing",
              "AGILE and Iterative Development",
              "Continous Integration and Delivery",
              "Build Pipeline Improvements"
            ]
          },
          {
            companyName: "Pluralsight",
            timeFrame: "Jan 2015 - Jun 2015",
            jobTitle: "Student Developer",
            jobTasks: [
              "Test Driven Development",
              "Created Workflow Automation Tool",
              "Setup CI/CD Pipeline",
              "Designed Look and Feel With Bootstrap and CSS",
              "LEAN Development"
            ]
          },
          {
            companyName: "International Document Services",
            jobTitle: "Student Developer",
            timeFrame: "Sept 2014 - Dec 2014",
            jobTasks: [
              "Applied New Style to Company Site",
              "Created Dynamic Content and Widgets",
              "Provided Weekly Demos"
            ]
          }
        ]
      };
    },
    components: {
      appSection: Section,
      appJobCards: JobCards
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";
</style>

