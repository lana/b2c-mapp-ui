import Vue from 'vue';

import App from './App.vue';

Vue.config.productionTip = false;
const appRootSelector = '#app';
const vueOptions = {
  render: (h) => h(App),
};

new Vue(vueOptions).$mount(appRootSelector);
