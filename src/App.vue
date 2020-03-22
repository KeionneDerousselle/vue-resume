<template>
  <div id="app">
    <app-header id="home" />
    <div class="content">
      <app-nav
        id="resume-nav"
        :nav-links="navLinks" />
      <app-about
        id="about"
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
