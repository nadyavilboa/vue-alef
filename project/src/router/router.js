import { createRouter, createWebHistory } from "vue-router";

import vFormWrapper from '../components/v-form-wrapper';
import vPreview from '../components/v-preview';

const routes = [
    {
        path: '/',
        name: 'form',
        component: vFormWrapper
    },
    {
        path: '/preview',
        name: 'preview',
        component: vPreview,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
      

export default router