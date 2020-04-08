<template>
  <footer>
    <div
      class="back-to-top"
      @click="backToTop()">
      <i class="material-icons md-48">keyboard_arrow_up</i>
    </div>
    <div class="container">
      <div
        id="contact-me"
        class="contact-me">
        <div class="contact-me__form-container">
          <h3 class="contact-me__title">
            Contact Me
          </h3>
          <form
            method="POST"
            action="https://formspree.io/knnderousselle@gmail.com"
            class="contact-me__form">
            <label
              for="name"
              class="sr-only">Enter your name</label>
            <input
              id="name"
              type="text"
              aria-placeholder="Your Name"
              placeholder="Your Name"
              name="name">

            <label
              for="email-address"
              class="sr-only">Enter your email address</label>
            <input
              id="email-address"
              type="email"
              aria-placeholder="Your Email Address"
              placeholder="Your Email Address"
              name="emailAddress">

            <label
              for="message"
              class="sr-only">Enter a message</label>
            <textarea
              id="message"
              cols="30"
              rows="6"
              placeholder="Your Message"
              aria-placeholder="Your Message"
              name="message" />

            <div class="contact-btn-container">
              <button
                class="btn btn-tan hover-tan-darker"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-container">
        <div class="contact-me__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/keionnederousselle/"
            class="footer__link">
            <span class="fab fa-linkedin-in footer__link-icon" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KeionneDerousselle?tab=repositories&type=source"
            class="footer__link">
            <span class="fab fa-github-alt footer__link-icon" />
          </a>

          <a
            href="mailto:knnderousselle@gmail.com"
            class="footer__link">
            <span class="far fa-envelope footer__link-icon" />
          </a>

          <a
            href="tel:+1-337-739-5608"
            class="footer__link">
            <span class="fas fa-phone-alt footer__link-icon" />
          </a>
        </div>

        <div class="copyright">
          <span>Keionne Derousselle</span>
          <span class="year">&copy; {{ currentYear }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date(Date.now()).getFullYear()
    }
  },
  methods: {
    backToTop() {
      this.$scrollTo('#home', 500)
    }
  }
}
</script>

<style lang="scss">
  footer {
    background-color: $black-light;
    color: $white;
    flex-shrink: 0;
    min-height: 20rem;
    position: relative;
  }

  .back-to-top {
    position: absolute;
    top: -2.5rem;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    background-color: $tan;
    display: inline-block;
    transform: translate(0, 0);
    transition: background 0.5s;
    border-radius: 50%;
    right: 0;
    color: $black-light;

    &:hover {
      background-color: $tan-darker;
    }
  }

  .footer__link {
    display: inline-block;
    text-decoration: none;
    background-color: $tan;
    color: $black-light;
    height: 5rem;
    width: 5rem;
    transform: translate(0, 0);
    transition: background 0.5s;
    border-radius: 50%;
    position: relative;
  }

  .footer__link:not(:last-of-type) {
    margin-right: 3rem;
  }

  .footer__link:hover {
    text-decoration: none;
    background-color: $tan-darker;
  }

  .footer__link-icon {
    font-size: 2.4rem;
    color: $black-light;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .contact-me__form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  .contact-me__form {
    width: 100%;
  }

  .contact-me {
    padding: 2rem 0px;

    .contact-me__title {
      color: $white;
    }

    hr {
      border-color: $white;
    }

    a {
      text-decoration: none;
      color: $white;
      &:hover {
        color: $tan;
      }
    }

    input,
    textarea {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 3px;
      width: 100%;
      border: none;
      margin-bottom: 2.4rem;
      background: #f5f5f5;
      font-weight: 500;
      padding: 1.6rem 2rem;

      &::placeholder {
        text-transform: uppercase;
        color: $form-gray;
        letter-spacing: 1px;
        font-size: 1.4rem;
      }

      &::-webkit-input-placeholder {
        text-transform: uppercase;
      }

      &::-moz-placeholder {
        text-transform: uppercase;
      }

      &::-ms-input-placeholder {
        text-transform: uppercase;
      }

      &:focus {
        outline: 4px solid $tan-darker;
      }
    }

    input {
      height: 5rem;
    }

    .contact-btn-container {
      display: flex;
      justify-content: flex-end;
      .btn {
        margin-bottom: 0;
      }
    }
  }

  .footer__bottom {
    background-color: $black;
  }

  .footer__bottom-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .copyright {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: $white;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .contact-me__links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
  }

  @include tablet {
    .contact-me__form {
      width: 75%;
    }
  }

  @include laptop {
    .contact-me__form {
      width: 50%;
    }
  }
</style>
