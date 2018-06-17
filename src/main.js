import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
window.addEventListener('load', AOS.refresh);
AOS.refresh();

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
  mounted() {
    AOS.init();
  },
  render: h => h(App)
});
