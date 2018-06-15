<template>
  <div class="row">
    <div class="col-lg" v-for="job in jobs" :key="job.companyName">
      <app-card :cardTitle="job.companyName">
        <div slot="front">
          <h5>{{ job.jobTitle }}</h5>
          <h5>{{ job.timeFrame }}</h5>
        </div>
        <div slot="back">
          <app-job-tasks :jobTasks="job.jobTasks"></app-job-tasks>
        </div>
      </app-card>
    </div>
  </div>
</template>

<script>
  import Card from "./Card.vue";
  import Section from "./Section.vue";
  import JobTasks from "./JobTasks.vue";

  export default {
    props: {
      jobs: {
        type: Array,
        required: true
      }
    },

    components: {
      appCard: Card,
      appSection: Section,
      appJobTasks: JobTasks
    }
  };
</script>
