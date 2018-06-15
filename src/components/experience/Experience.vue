<template>
  <app-section section-title="Experience">
    <div class="row">
      <div class="col-lg">
        <app-card :cardTitle="jobs.wtw.companyName">
          <div slot="front">
            <h5>Software Developer</h5>
            <h5>SCRUM Master</h5>
            <h4>Jun 2015 - Present</h4>
          </div>
          <div slot="back">
            <app-job-tasks :jobTasks="jobs.wtw.jobTasks"></app-job-tasks>
          </div>
        </app-card>
      </div>
      <div class="col-lg">
        <app-card :cardTitle="jobs.ps.companyName">
          <div slot="front">
            <h4>Student Developer</h4>
            <h4>Jan 2015 - Jun 2015</h4>
          </div>
          <div slot="back">
            <app-job-tasks :jobTasks="jobs.ps.jobTasks"></app-job-tasks>
          </div>
        </app-card>
      </div>
      <div class="col-lg">
        <app-card :cardTitle="jobs.ids.companyName">
          <div slot="front">
            <h4>Student Developer</h4>
            <h4>Sept 2015 - Dec 2015</h4>
          </div>
          <div slot="back">
            <app-job-tasks :job-tasks="jobs.ids.jobTasks"></app-job-tasks>
          </div>
        </app-card>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Card from "../shared/Card.vue";
  import Section from "../shared/Section.vue";
  import JobTasks from "../shared/JobTasks.vue";

  export default {
    data() {
      return {
        jobs: {
          wtw: {
            companyName: 'Willis Towers Watson',
            timeFrame: 'Jun 2015 - Present',
            jobTasks: [
              "Legacy Application Rewrite",
              "Maintain and Improve Product Stability",
              "Automated Testing",
              "AGILE and Iterative Development",
              "Continous Integration and Delivery",
              "Build Pipeline Improvements"
            ]
          },
          ps: {
            companyName: 'Pluralsight',
            timeFrame: 'Jan 2015 - Jun 2015',
            jobTasks: [
              'Test Driven Development',
              'Created Workflow Automation Tool',
              'Setup CI/CD Pipeline',
              'Designed Look and Feel With Bootstrap and CSS',
              'LEAN Development',
            ]
          },
          ids: {
            companyName: 'International Document Services',
            timeFrame: 'Sept 2014 - Dec 2014',
            jobTasks: [
              'Applied New Style to Company Site',
              'Created Dynamic Content and Widgets',
            ]
          }
        }
      };
    },
    components: {
      appCard: Card,
      appSection: Section,
      appJobTasks: JobTasks
    }
  };
</script>

<style lang="scss" scoped>
</style>
