scaff
<template>
  <app-section section-title="Skills" id="skills">
    <div class="section-container">
      <div class="row about-section">
        <div class="col-md" v-for="(skillSet, index) in skillSets" :key="`${skillSet}${index}`">
          <div class="skill-set-title text-center margin-bottom-2">
            <h4>{{ skillSet.skillSetTitle }}</h4>
            <hr>
          </div>
          <div v-for="(skill, i) in skillSet.skills" :key="`${skill}${i}`">
            {{ skill.name }}
            <app-progress-bar :percent="skill.level"></app-progress-bar>
          </div>
        </div>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Section from "../shared/Section.vue";
  import ProgressBar from "../shared/ProgressBar.vue";

  export default {
    data() {
      return {
        skillSets: [
          {
            skillSetTitle: "Core Competencies",
            skills: [
              {
                name: "ReactJs",
                level: 95
              },
              {
                name: "ES6",
                level: 92
              },
              {
                name: "Redux",
                level: 95
              },
              {
                name: "Webpack",
                level: 85
              },
              {
                name: "Jest",
                level: 90
              },
              {
                name: "REST",
                level: 95
              },
              {
                name: "HTML",
                level: 93
              },
              {
                name: "CSS",
                level: 85
              }
            ]
          },
          {
            skillSetTitle: "Technical Skills",
            skills: [
              {
                name: "Test Driven Development",
                level: 90
              },
              {
                name: "Automated Testing",
                level: 97
              },
              {
                name: "SOLID Principles",
                level: 95
              },
              {
                name: "Continuous Integration and Delivery",
                level: 93
              },
              {
                name: "AGILE Development",
                level: 100
              },
              {
                name: "Object-Oriented Programming",
                level: 95
              },
              {
                name: "Pair Programming",
                level: 100
              }
            ]
          },
          {
            skillSetTitle: "Development Tools",
            skills: [
              {
                name: "VS Code",
                level: 87
              },
              {
                name: "Git",
                level: 95
              },
              {
                name: "JIRA",
                level: 80
              },
              {
                name: "TeamCity",
                level: 90
              },
              {
                name: "Octopus",
                level: 85
              },
              {
                name: "Visual Studio",
                level: 85
              },
              {
                name: "ReSharper",
                level: 80
              },
              {
                name: "Sumo Logic",
                level: 75
              }
            ]
          }
        ]
      };
    },
    components: {
      appSection: Section,
      appProgressBar: ProgressBar
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .skill-set-title {
    h4 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      height: $space;
    }
  }
</style>

