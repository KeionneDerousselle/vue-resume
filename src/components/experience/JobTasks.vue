<template>
  <ul>
    <li
      v-for="(task, index) in jobTasks"
      :key="index">
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
}
</script>

<style lang="scss" scoped>
  @import "../../styles/variables.scss";

  ul {
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      line-height: 2.6rem;

      i {
        margin: 0 1.8rem;
      }
    }
  }

  @media (min-width: 540px) {
    ul {
      li {
        line-height: 3.5rem;

        i {
          margin-right: 1.8rem;
          margin-left: 0;
        }
      }
    }
  }

    @media (min-width: 992px) {
    ul {
      li {
        line-height: 2.8rem;

        i {
          margin: 0 1.8rem;
        }
      }
    }
  }
</style>
