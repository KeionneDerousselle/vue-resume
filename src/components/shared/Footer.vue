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
        <h3>Contact Me</h3>
        <hr>
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
                type="text"
                aria-placeholder="Email Address"
                placeholder="Email Address"
                name="emailAddress">

              <label
                for="message"
                class="sr-only">Enter a message</label>
              <textarea
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
                aria-placeholder="Message"
                name="message" />

              <div class="contact-btn-container">
                <button
                  class="btn btn-outline-white hover-green"
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
      top: -25px;
      height: 50px;
      width: 50px;
      cursor: pointer;
      background-color: $green-darker;
      display: inline-block;
      transform: translate(0, 0);
      transition: background 0.5s;
      border-radius: 50%;
      right: 0;

      &:hover {
        background-color: $green-darkest;
      }
    }

    .contact-me {
      padding: 2rem 0px;

      h3 {
        text-transform: uppercase;
      }

      hr {
        border-color: $white;
      }

      a {
        text-decoration: none;
        color: $white;
        &:hover {
          color: $green-darker;
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
        margin-bottom: 24px;
        background: #f5f5f5;

        &::placeholder {
          text-transform: uppercase;
          color: $form-gray;
          letter-spacing: 1px;
          font-size: 14px;
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
          outline: 3px solid $form-gray;
        }
      }

      input {
        height: 50px;
        padding-left: 20px;
        font-weight: 500;
      }

      textarea {
        padding: 16px 20px;
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
      color: $copyright-gray;
      background-color: $black;
      height: 4rem;
      display: flex;
      align-items: center;
      font-size: 14px;
      .year {
        color: $green;
      }
    }
  }
</style>
