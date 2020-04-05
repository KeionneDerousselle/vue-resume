<template>
  <app-section class="experience">
    <h2 class="experience__title">
      Experience
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
            <i class="material-icons job__task-bullet">brightness_1</i>
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

export default {
  data() {
    return {
      jobs: [
        {
          companyName: 'CHG Healthcare',
          jobTitle: 'Software Engineer II',
          timeFrame: 'Aug 2018 - Present',
          jobTasks: [
            'Created a CI/CD pipeline deploying to Heroku',
            'Worked with UX and Product to implement a design sytem by creating a mobile first, accessible component library',
            'Improved testing quality and standards in existing applications',
            'Mentored Junior developers and introduced a training repository',
            'Embedded a Vue/Node.js application in a legacy Saleforce application',
            'Received monthly and quaterly Core Values Awards via peer nominations',
            'Received monthly and quarterly Excellence Awards via mangement nominations'
          ]
        },
        {
          companyName: 'Willis Towers Watson',
          jobTitle: 'Software Developer',
          timeFrame: 'Jun 2015 - Aug 2018',
          jobTasks: [
            'Legacy Application Rewrite',
            'Maintain and Improve Product Stability',
            'Automated Testing',
            'AGILE and Iterative Development',
            'Continous Integration and Delivery',
            'Build Pipeline Improvements'
          ]
        },
        {
          companyName: 'Pluralsight',
          timeFrame: 'Jan 2015 - Jun 2015',
          jobTitle: 'Student Developer',
          jobTasks: [
            'Test Driven Development',
            'Created Workflow Automation Tool',
            'Setup CI/CD Pipeline',
            'Designed Look and Feel With Bootstrap and CSS',
            'LEAN Development'
          ]
        },
        {
          companyName: 'International Document Services',
          jobTitle: 'Student Developer',
          timeFrame: 'Sept 2014 - Dec 2014',
          jobTasks: [ 'Applied New Style to Company Site', 'Created Dynamic Content and Widgets', 'Provided Weekly Demos' ]
        }
      ]
    }
  },
  components: {
    appSection: Section,
    Card
  }
}
</script>
<style lang="scss">
.job:not(:last-child) {
  border-bottom: 1px solid #ccc;
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
