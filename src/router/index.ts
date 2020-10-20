//@ts-nocheck
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tours',
    name: 'Tours',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Tours'),
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Book'),
  },
  {
    path: '/profile',
    name: 'LinkedIn',
    beforeEnter() {
      location.href = 'https://www.linkedin.com/in/arthur-mita-a37734134';
    },
  },
  {
    path: '/course',
    name: 'AdvancedCssCourse',
    beforeEnter() {
      location.href = 'https://www.udemy.com/course/advanced-css-and-sass';
    },
  },
  {
    path: "/git",
    name: 'Github',
    beforeEnter() {
      location.href = 'https://github.com/bibibiu2017/vue3-nators-project'
    }
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
