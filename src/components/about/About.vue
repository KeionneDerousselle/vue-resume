<template>
  <div class="background-light">
    <app-section
      id="about"
      section-title="About Me">
      <div class="row">
        <div class="col-md">
          <div class="picture-section">
            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              class="my-picture">
              <img
                src="../../assets/me.jpg"
                alt="Picture of Keionne">
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="overflow-hidden">
            <div
              v-for="(about, index) in aboutMe"
              :key="`about-paragraph-${index}`">
              <app-about-paragraph
                :icon="about.icon"
                :text="about.text"
                data-aos="fade-left"
                data-aos-duration="3000" />
            </div>
          </div>
        </div>
      </div>
    </app-section>
  </div>
</template>

<script>
import Section from '../shared/Section.vue'
import AboutParagraph from './AboutParagraph.vue'

export default {
  data() {
    return {
      aboutMe: [
        {
          icon: 'build',
          text:
            'Proven proficiency in Full-Stack Development, skilled at progressing from problem statement to well-documented design'
        },
        {
          icon: 'timer',
          text:
            'Adapts Easily, Highly Committed, Hardworking and Determined to fulfill responsibilities in a Professional and Timely Manner'
        },
        {
          icon: 'extension',
          text:
            'Analytical thinker that resolves issues or defects; often called upon to solve problems that have eluded resolution by others'
        }
      ]
    }
  },
  components: {
    appSection: Section,
    appAboutParagraph: AboutParagraph
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  .picture-section {
    height: 100%;
    padding-bottom: 10rem;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .picture-section {
      padding-bottom: 0;
    }
  }

  .my-picture {
    img {
      height: 365px;
      border-radius: 10%;
    }
  }

  .about-section {
    padding: 15rem 0;
  }
</style>
