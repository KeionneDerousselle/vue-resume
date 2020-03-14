<template>
  <div class="row">
    <div
      v-for="job in jobs"
      :key="job.companyName"
      class="col-lg cards-container">
      <div class="card-container">
        <app-card :card-title="job.companyName">
          <div slot="front">
            <h4>{{ job.jobTitle }}</h4>
            <h4>{{ job.timeFrame }}</h4>
          </div>
          <div
            slot="back"
            class="ie-container back-slot">
            <app-job-tasks :job-tasks="job.jobTasks" />
          </div>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../shared/Card.vue'
import JobTasks from './JobTasks.vue'

export default {
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },

  components: {
    appCard: Card,
    appJobTasks: JobTasks
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  div.cards-container:not(:last-child) {
    .card-container {
      margin-bottom: 6rem
    }
  }

  .back-slot {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .card-container {
      margin-bottom: 0;
    }

    .back-slot {
      display: inherit;
    }
  }
</style>
