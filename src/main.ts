import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.mount('#app');
app.config.performance = import.meta.env.DEV;
