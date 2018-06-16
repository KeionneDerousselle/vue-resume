<template>
  <footer>
    <div class="back-to-top">
      <i class="material-icons md-48">keyboard_arrow_up</i>
    </div>
    <div class="contact-me container" id="contact-me">
      <h3>Contact Me</h3>
      <hr>
      <div class="row">
        <div class="col-md">
          <p>7650 South Euro Drive</p>
          <p>Midvale, UT 84047</p>
          <hr>
          <p><b>E:</b> knnderousselle@gmail.com</p>
          <p><b>P:</b> +1-337-730-5608</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/keionnederousselle/">LinkedIn</a></p>
        </div>
        <div class="col-md">
          <form method="POST" action="https://formspree.io/knnderousselle@gmail.com">
            <input type="text" aria-placeholder="Your Name" placeholder="Your Name" name="name">
            <input type="text" aria-placeholder="Email Address" placeholder="Email Address" name="emailAddress">
            <textarea cols="30" rows="6" placeholder="Message" aria-placeholder="Message" name="message"></textarea>
            <div class="contact-btn-container">
              <button class="btn btn-outline-white hover-green" type="submit">Submit</button>
            </div>
          </form>
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
      };
    }
  };
</script>

<style lang="scss" scoped>
  footer {
    background-color: #1b1b18;
    color: #fff;
    flex-shrink: 0;
    min-height: 20rem;
    position: relative;

    .back-to-top {
      position: absolute;
      top: -25px;
      height: 50px;
      width: 50px;
      cursor: pointer;
      background-color: #7d9389;
      display: inline-block;
      transform: translate(0, 0);
      transition: background 0.5s;
      border-radius: 50%;
      right: 0;
    }

    .contact-me {
      padding: 2rem 0px;

      h3 {
        text-transform: uppercase;
      }

      hr {
        border-color: #fff;
      }

      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #7d9389;
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
          color: #4d4d4d;
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
          outline: 3px solid #4d4d4d;
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
      color: #8f9aa7;
      background-color: #000;
      height: 4rem;
      display: flex;
      align-items: center;
      font-size: 14px;
      .year {
        color: #ACB9B3;
      }
    }
  }
</style>

