<template>
  <div id="app">
    <app-header id="home" />
    <div class="content">
      <app-nav
        id="resume-nav"
        :nav-links="navLinks" />
      <app-about
        id="about"
        class="background--green" />
      <testimonies
        id="testimonies"
        class="background--dark" />
      <app-skills
        id="skills"
        class="background--light" />
      <app-experience
        id="experience"
        class="background--dark" />
      <app-education
        id="education"
        class="background--light" />
      <app-awards
        id="awards"
        class="background--dark" />
    </div>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Nav from './components/shared/Nav.vue'
import About from './components/about/About.vue'
import Testimonies from './components/testimonies/Testimonies.vue'
import Skills from './components/skills/Skills.vue'
import Experience from './components/experience/Experience.vue'
import Education from './components/education/Education.vue'
import Awards from './components/awards/Awards.vue'
import Footer from './components/shared/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appNav: Nav,
    appAbout: About,
    Testimonies,
    appSkills: Skills,
    appExperience: Experience,
    appEducation: Education,
    appAwards: Awards,
    appFooter: Footer
  },

  data: () => ({
    navLinks: [
      {
        title: 'Home',
        href: '#home'
      },
      {
        title: 'About Me',
        href: '#about'
      },
      {
        title: 'Testimonies',
        href: '#testimonies'
      },
      {
        title: 'Skills',
        href: '#skills'
      },
      {
        title: 'Experience',
        href: '#experience'
      },
      {
        title: 'Education',
        href: '#education'
      },
      {
        title: 'Awards',
        href: '#awards'
      },
      {
        title: 'Contact Me',
        href: '#contact-me'
      }
    ]
  })
}
</script>
<style lang="scss">
.background--light {
  background: $white;
}

.background--dark {
  background: #f5f5f5;
}

.background--green {
  background: $green-darker;

  .section__header {
    color: $white;
    border-bottom: 1px solid $white;
  }
}
</style>
