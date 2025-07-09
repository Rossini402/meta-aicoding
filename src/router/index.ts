import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/core-concept',
      name: 'core-concept',
      component: () => import('../views/CoreConceptView.vue'),
    },
    {
      path: '/case-library',
      name: 'case-library',
      component: () => import('../views/CaseLibraryView.vue'),
    },
    {
      path: '/contributors',
      name: 'contributors',
      component: () => import('../views/ContributorsView.vue'),
    },
    {
      path: '/open-source',
      name: 'open-source',
      component: () => import('../views/OpenSourceView.vue'),
    },
    {
      path: '/author',
      name: 'author',
      component: () => import('../views/AuthorView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/co-creation',
      name: 'co-creation',
      component: () => import('../views/CoCreationView.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
