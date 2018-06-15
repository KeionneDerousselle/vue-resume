<template>
  <div>
    <ul>
      <li v-for="tab in tabs" :key="tab" @click="selectedTab = tab">
        <div class="tab-title">
          <span :class="{active: selectedTab === tab}">
            {{tab}}
          </span>
        </div>
      </li>
    </ul>
    <div>
      <slot :name="selectedTab"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tabs: {
        type: Array,
        require: true
      }
    },

    data() {
      return {
        selectedTab: this.tabs[0]
      };
    }
  };
</script>

<style lang="scss" scoped>

  ul {
    list-style-type: none;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid #ccc;
    overflow: visible;
    margin-bottom: 24px;

    li {
      margin-bottom: 15px;
      display: inline-block;
      cursor: pointer;
      .tab-title {
        transition: all 0.3x ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        padding: 0 24px;
        opacity: 0.5;
        position: relative;
        span {
          line-height: 24px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          &.active {
            color: #7d9389;
          }
        }
      }
    }
  }
</style>
