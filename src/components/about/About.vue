<template>
  <app-section class="about">
    <div class="about__content">
      <div class="overflow-hidden about__section about__section--img">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="0">
          <div class="about__img">
            <div class="my-picture">
              <img
                src="../../assets/me.jpg"
                alt="Picture of Keionne">
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden about__section about__section--text">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="0">
          <div>
            <h3 class="about__title">
              Hi there!
            </h3>
            <p class="about__paragraph">
              My name is Keionne Derousselle.
              I am a hardworking full stack engineer,  who loves technology.
              Eager to learn new things, I am constantly honing my craft.
              Delivering quality products is what drives me to create.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </app-section>
</template>

<script>
import Section from '../shared/Section.vue'

export default {
  components: {
    appSection: Section
  }
}
</script>

<style lang="scss">
.about__content {
  color: $white;
  display: flex;
  flex-direction: column;
}

.about__section {
  width: 100%;
}

.about__section--text {
  width: 100%;
  display: flex;
  align-items: center;
}

.about__title {
  font-size: 4rem;
  color: $white;
  text-transform: none;
  border: none;
  text-align: left;
}

.about__paragraph {
  font-size: 2rem;
  padding: 0;
  margin: 0;
}

.about__img {
  height: 100%;
  padding-bottom: 10rem;
  display: flex;
  justify-content: center;
}

@include tablet {
  .about__content {
    flex-direction: row;
  }

  .about__img {
    padding-bottom: 0;
  }
}

  .my-picture {
    img {
      height: 365px;
      border-radius: 10%;
    }
  }
</style>
