<template>
  <div class="skill-bar">
    <div :style="cssProps" class="skill-bar fill" data-aos="fill-bar" data-aos-duration="2000">
    </div>
  </div>
</template>

<script>
// :style="{width: `${percent - 5}%`}"
  export default {
    props: {
      percent: {
        type: Number,
        required: true
      }
    },

    computed: {
      cssProps(){
        return {
          '--width': `${this.percent -5}%`
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  [data-aos="fill-bar"] {
    width: 0%;
    transition-property: width;
    &.aos-animate {
      width: var(--width);
    }
  }

  .skill-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: #eee;
    height: 28px;
    margin: 0 0 15px 0;
    border-radius: 3px;
    align-items: flex-end;

    .fill {
      top: 0;
      left: 0;
      position: absolute;
      background-color: $green-darker;
      padding: 0;
      opacity: 1;
      // transition: 1.1s 0.2s width ease-in-out;
    }

    span {
      z-index: 1;
      padding: 0 15px 0 0;
      display: initial;
    }
  }
</style>
