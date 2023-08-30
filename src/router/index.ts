import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ArticleComponent from '@/components/ArticleComponent.vue'
import ProjectArticleComponent from '@/components/ProjectArticleComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about me',
      component: AboutMeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/articles/:id',
      component: ArticleComponent,
      props: true,
    },
    {
      path: '/projects/:id',
      component: ProjectArticleComponent,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export function returnPage() {
  router.back()
}

export default router