<template>
  <app-section class="experience">
    <h2
      class="section__title experience__title"
      data-aos="zoom-in"
      data-aos-duration="650"
      data-aos-offset="0">
      <span class="fas fa-laptop-code section-title__icon experience__icon" />
      <span>Experience</span>
    </h2>

    <card
      v-for="job in jobs"
      :key="`${job.companyName}-${job.jobTitle}-${job.timeFrame}`"
      data-aos="fade-down"
      data-aos-duration="650"
      class="job">
      <template v-slot:title>
        <span class="job__company">{{ job.companyName }}</span>
      </template>
      <template v-slot:subtitle>
        <div>
          <span class="job__header__subtitle job__position">{{ job.jobTitle }}, </span>
          <span class="job__header__subtitle job__timeframe">{{ job.timeFrame }}</span>
        </div>
      </template>
      <template v-slot:content>
        <ul class="job__tasks">
          <li
            v-for="(task, index) in job.jobTasks"
            :key="`${job.companyName}-task-${index}`"
            class="job__task">
            <span class="fas fa-circle job__task-bullet" />
            <span>{{ task }}</span>
          </li>
        </ul>
      </template>
    </card>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'
import Card from '../shared/Card.vue'
import jobs from '../../assets/data/experience'

export default {
  components: {
    appSection: Section,
    Card
  },

  data: () => ({
    jobs
  })
}
</script>
<style lang="scss">
.job:not(:last-child) {
  border-bottom: 1px solid $gray;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
}

.job__header {
  margin-bottom: 0;
  margin-bottom: 1.5rem;
}

.job__company {
  display: block;
  color: $green-darkest;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.job__header__subtitle {
  display: block;
  color: #5b5b5b;
  text-transform: uppercase;
  font-size: 1.4rem;
}

.job__position {
  margin-right: 0.5rem;
}

.job__tasks {
  margin: 0;
  padding: 0;
}

.job__task {
  display: flex;
  align-items: flex-start;
}

.job__task-bullet {
  font-size: 1rem;
  margin-top: 1rem;
  margin-right: 1.5rem;
  color: $green-darkest;
}

@include tablet {
  .job__header__subtitle{
    display: inline-block;
  }

  .job-card__position {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
}
</style>
