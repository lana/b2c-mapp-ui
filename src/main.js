import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const appRootSelector = '#app';
const vueOptions = {
  render: (h) => h(App),
};

new Vue(vueOptions).$mount(appRootSelector);
