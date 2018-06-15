<template>
  <div class="skill-bar">
    <div class="skill-bar fill" :style="{width: `${percent - 5}%`}">
    </div>
    <span>{{ percent }}%</span>
  </div>
</template>

<script>
  export default {
    props: {
      percent: {
        type: Number,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
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
      background-color: #7d9389;
      padding: 0;
      opacity: 1;
      transition: 1.1s 0.2s width ease-in-out;
    }

    span {
      z-index: 1;
      padding: 0 15px 0 0;
      display: initial;
    }
  }
</style>
