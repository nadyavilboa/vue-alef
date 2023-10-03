import { createApp,h } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'

import router from './router/router';

const app  = createApp({
    render: ()=>h(App)
});

app
    .use(store)
    .use(router)
    .mount('#app');
