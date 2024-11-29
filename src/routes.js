import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import SecondPage from './SecondPage.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/second-page', component:SecondPage}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
