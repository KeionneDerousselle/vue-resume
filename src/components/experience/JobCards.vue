<template>
  <div class="row">
    <div class="col-lg cards-container" v-for="job in jobs" :key="job.companyName">
      <div class="card-container">
        <app-card :cardTitle="job.companyName">
          <div slot="front">
            <h5>{{ job.jobTitle }}</h5>
            <h5>{{ job.timeFrame }}</h5>
          </div>
          <div slot="back" class="ie-container">
            <app-job-tasks :jobTasks="job.jobTasks"></app-job-tasks>
          </div>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../shared/Card.vue";
  import Section from "../shared/Section.vue";
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

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  div.cards-container:not(:last-child) {
    .card-container {
      margin-bottom: $space;
    }
  }

  @media (min-width: 992px) {
    .card-container {
      margin-bottom: 0;
    }
  }
</style>
