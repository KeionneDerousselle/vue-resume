<template>
  <ul>
    <li v-for="(task, index) in jobTasks" :key="index">
      <i class="material-icons">done</i>
      {{ task }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      jobTasks: {
        type: Array,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      line-height: 40px;

      i {
        margin-right: 16px;
      }
    }
  }
</style>

