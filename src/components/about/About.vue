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
          <app-about-paragraph :icon="about.icon" :text="about.text" data-aos="fade-left" data-aos-duration="3000"></app-about-paragraph>
        </div>
      </div>
    </div>
  </app-section>
</template>

<script>
  import Section from "../shared/Section.vue";
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
        ]
      };
    },
    components: {
      appSection: Section,
      appAboutParagraph: AboutParagraph
    }
  };
</script>

<style lang="scss">
  $gray: #ccc;
  $darker-gray: darken($gray, 50%);

  .about {
    color: $darker-gray;

    .my-picture {
      img {
        height: 315px;
        border-radius: 10%;
        margin-top: 2rem;
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
  }
</style>
