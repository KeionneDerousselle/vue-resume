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
        <h3 class="contact-me__title">
          Contact Me
        </h3>
        <div class="row">
          <div class="col-md">
            <p>
              <b>E:</b> <a href="mailto:knnderousselle@gmail.com">knnderousselle@gmail.com</a>
            </p>
            <p>
              <b>P:</b> <a href="tel:+1-337-739-5608">+1-337-739-5608</a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/keionnederousselle/">LinkedIn</a>
            </p>
          </div>
          <div class="col-md">
            <form
              method="POST"
              action="https://formspree.io/knnderousselle@gmail.com">
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
    </div>
    <div class="copyright">
      <div class="container">
        Keionne Derousselle
        <span class="year">&copy; {{ currentYear }}</span>
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

    .copyright {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: $white;
      background-color: $black;
      height: 4rem;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
    }
  }
</style>
