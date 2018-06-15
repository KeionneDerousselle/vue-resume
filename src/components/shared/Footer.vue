<template>
  <footer>
    <div class="contact-me container">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md">
          <input type="text" aria-placeholder="Your Name" placeholder="Your Name">
          <input type="text" aria-placeholder="Email Address" placeholder="Email Address">
          <textarea name="" id="" cols="30" rows="6" placeholder="Message" aria-placeholder="Message"></textarea>
          <div class="contact-btn-container">
            <button class="btn btn-outline-white hover-green">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  footer {
    background-color: #1b1b18;
    color: #fff;
    flex-shrink: 0;
    min-height: 20rem;

    .contact-me {
      padding: 2rem 0px;

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

        &::placeholder{
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
      }
    }
  }
</style>

