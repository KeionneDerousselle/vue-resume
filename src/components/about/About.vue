<template>
  <app-section section-title="About Me" class="about">
    <div class="row about-content">
      <div class="col-md"></div>
      <div class="col-md">
        <app-tabs :tabs="tabs">
          <div v-for="(skillSet, index) in skillSets" :key="`${skillSet}${index}`" :slot="skillSet.skillSetTitle">
            <div v-for="(skill, i) in skillSet.skills" :key="`${skill}${i}`">
              {{ skill.name }}
              <app-progress-bar :percent="skill.level"></app-progress-bar>
            </div>
          </div>
        </app-tabs>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Section from "../shared/Section.vue";
  import ProgressBar from "../shared/ProgressBar.vue";
  import Tabs from "../shared/Tabs.vue";

  export default {
    data() {
      return {
        skillSets: [
          {
            skillSetTitle: "Core Competencies",
            skills: [
              {
                name: "ReactJs",
                level: 98
              },
              {
                name: "ES6",
                level: 95
              },
              {
                name: "Redux",
                level: 98
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
                name: "Enzyme",
                level: 75
              },
              {
                name: "REST",
                level: 95
              },
              {
                name: "HTML",
                level: 95
              },
              {
                name: "CSS",
                level: 85
              }
            ]
          },
          {
            skillSetTitle: "Development Tools",
            skills: [
              {
                name: "VS Code",
                level: 90
              },
              {
                name: "Git",
                level: 95
              },
              {
                name: "JIRA",
                level: 85
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
                level: 90
              },
              {
                name: "ReSharper",
                level: 80
              },
              {
                name: "Sumo Logic",
                level: 80
              },
              {
                name: "New Relic",
                level: 75
              }
            ]
          },
          {
            skillSetTitle: "Technical Skills",
            skills: [
              {
                name: "Test Driven Development",
                level: 95
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
                level: 97
              },
              {
                name: "Pair Programming",
                level: 100
              }
            ]
          }
        ]
      };
    },
    computed: {
      tabs() {
        return this.skillSets.reduce((skillTabs, skill) => {
          skillTabs.push(skill.skillSetTitle);
          return skillTabs;
        }, []);
      }
    },
    components: {
      appSection: Section,
      appProgressBar: ProgressBar,
      appTabs: Tabs
    }
  };
</script>

<style lang="scss">
  $gray: #ccc;
  $darker-gray: darken($gray, 50%);

  .about {
    color: $darker-gray;
    .about-content {
      height: 47rem;
    }
  }
</style>
