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
      <div v-for="tab in tabs" :key="`${tab}-content`" :class="['tab-content', { active: selectedTab === tab}]">
        <slot :name="tab"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import AOS from 'aos';

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
    },

    updated() {
      AOS.refresh();
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
        font-size: 13px;
        padding: 0 10px;
        position: relative;
        user-select: none;
        span {
          line-height: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          opacity: .8;
          &.active {
            color: #7d9389;
            opacity: 1;
          }
        }
      }
    }
  }

  .tab-content {
    display: none;

    &.active {
      display: block;
    }
  }
</style>
