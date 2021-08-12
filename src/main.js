import Vue from 'vue';
import contenteditable from 'vue-contenteditable';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.use(contenteditable);

const appRootSelector = '#app';
const vueOptions = {
  render: (h) => h(App),
};

new Vue(vueOptions).$mount(appRootSelector);
