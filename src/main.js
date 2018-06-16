import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '#app',
  render: h => h(App)
});
