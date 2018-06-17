<template>
  <app-section section-title="About Me" class="about" id="about">
    <div class="about-content">
      <div class="row">
        <div class="flex-center w-100 about-section">
          <div data-aos="fade-right" data-aos-duration="2500" class="my-picture">
            <img src="../../assets/me.jpg" alt="Picture of Keionne">
          </div>
        </div>
      </div>
      <div class="row about-section">
        <div class="col-md" v-for="(about, index) in aboutMe" :key="`about-paragraph-${index}`">
          <app-about-paragraph :icon="about.icon" :text="about.text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2500"></app-about-paragraph>
        </div>
      </div>
      <div class="row about-section">
        <div class="col-md" v-for="(skillSet, index) in skillSets" :key="`${skillSet}${index}`">
          <h4 class="skill-set-title">{{ skillSet.skillSetTitle }}</h4>
          <hr>
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
  import AboutParagraph from "./AboutParagraph.vue";

  export default {
    data() {
      return {
        aboutMe: [
          {
            icon: "build",
            text:
              "Proven proficiency in Full-Stack Development, skilled at progressing from problem statement to well-documented design"
          },
          {
            icon: "timer",
            text:
              "Adapts Easily, Highly Committed, Hardworking and Determined to fulfill responsibilities in a Professional and Timely Manner"
          },
          {
            icon: "extension",
            text:
              "Analytical thinker that resolves issues or defects; often called upon to solve problems that have eluded resolution by others"
          }
        ],
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
          }
        ],
        selectedSkillSet: "Core Competencies"
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
    methods: {
      handleSkillSetSelected(skillSet) {
        this.selectedSkillSet = skillSet;
        console.log(this.selectedSkillSet);
      }
    },
    components: {
      appSection: Section,
      appProgressBar: ProgressBar,
      appAboutParagraph: AboutParagraph
    }
  };
</script>

<style lang="scss">
  $gray: #ccc;
  $darker-gray: darken($gray, 50%);

  .about {
    color: $darker-gray;

    .about-content {
      min-height: 45rem;
    }

    .my-picture {
      img {
        height: 315px;
        border-radius: 10%;
      }
    }

    .flex-center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .about-section {
      margin-bottom: 2rem;
    }

    .skill-set-title {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
    }
  }
</style>
