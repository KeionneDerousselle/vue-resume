<template>
  <div class="background-dark">
    <app-section
      id="skills"
      section-title="Skills"
      class="skills-section">
      <div class="row">
        <div
          v-for="(skillSet, index) in skillSets"
          :key="`${skillSet}${index}`"
          class="col-md">
          <div class="skill-set-title text-center margin-bottom-2">
            <app-header-tertiary :text="skillSet.skillSetTitle" />
            <hr>
          </div>
          <div
            v-for="(skill, i) in skillSet.skills"
            :key="`${skill}${i}`">
            {{ skill.name }}
            <app-progress-bar :percent="skill.level" />
          </div>
        </div>
      </div>
    </app-section>
  </div>
</template>

<script>
import Section from '../shared/Section.vue'
import HeaderTertiary from '../shared/typography/HeaderTertiary.vue'
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
          skillSetTitle: 'Technical Skills',
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
    appHeaderTertiary: HeaderTertiary,
    appProgressBar: ProgressBar
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .skill-set-title {
    margin: 6rem 0;
  }

  @media (min-width: 768px) {
    .skill-set-title {
      margin: 2rem 0 4rem 0;
    }
  }
</style>
