import Vue from 'vue';
import App from './App.vue';

import VueCssDoodle from '@luxdamore/vue-css-doodle';
import '@luxdamore/vue-css-doodle/dist/VueCssDoodle.css';

Vue.config.productionTip = false;

Vue.use(
  VueCssDoodle
);

new Vue({
  render: (h) => h(App),
}).$mount('#app');