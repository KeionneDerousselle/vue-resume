<template>
  <app-section class="section__skills">
    <div class="row">
      <div
        v-for="(skillSet, index) in skillSets"
        :key="`${skillSet}${index}`"
        class="col-md skillset">
        <h2 class="skillset__title">
          {{ skillSet.skillSetTitle }}
        </h2>

        <div
          v-for="(skill, i) in skillSet.skills"
          :key="`${skill}${i}`">
          {{ skill.name }}
          <app-progress-bar :percent="skill.level" />
        </div>
      </div>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'
import ProgressBar from '../shared/ProgressBar.vue'

export default {
  data() {
    return {
      skillSets: [
        {
          skillSetTitle: 'Core Competencies',
          skills: [
            {
              name: 'Vue / Vuex',
              level: 99
            },
            {
              name: 'React / Redux',
              level: 85
            },
            {
              name: 'ES6',
              level: 92
            },
            {
              name: 'Sass',
              level: 80
            },
            {
              name: 'Webpack',
              level: 85
            },
            {
              name: 'Jest',
              level: 90
            },
            {
              name: 'Node',
              level: 85
            }
          ]
        },
        {
          skillSetTitle: 'Methodologies',
          skills: [
            {
              name: 'Test Driven Development',
              level: 90
            },
            {
              name: 'Automated Testing',
              level: 97
            },
            {
              name: 'Accessibility',
              level: 85
            },
            {
              name: 'SOLID Principles',
              level: 95
            },
            {
              name: 'CI/CD',
              level: 93
            },
            {
              name: 'Mobile First',
              level: 85
            },
            {
              name: 'Pair Programming',
              level: 100
            }
          ]
        },
        {
          skillSetTitle: 'Development Tools',
          skills: [
            {
              name: 'VS Code',
              level: 87
            },
            {
              name: 'Git',
              level: 95
            },
            {
              name: 'JIRA',
              level: 95
            },
            {
              name: 'Jenkins',
              level: 90
            },
            {
              name: 'LogRocket',
              level: 85
            },
            {
              name: 'Browerstack',
              level: 85
            },
            {
              name: 'Postman',
              level: 90
            }
          ]
        }
      ]
    }
  },
  components: {
    appSection: Section,
    appProgressBar: ProgressBar
  }
}
</script>

<style lang="scss">
.skillset:not(:last-of-type) {
  margin-bottom: 6rem;
}

.skillset__title {
  border-bottom: 1px solid $gray;
  height: 5.3rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
}

@include tablet {
  .skillset {
    margin-bottom: 0;
  }
}
</style>
