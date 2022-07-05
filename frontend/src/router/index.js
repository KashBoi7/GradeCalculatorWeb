import { createRouter, createWebHistory } from 'vue-router'
import GradeCalc from '@/components/GradeCalc.vue'
const routes = [
  {
    path: '/gradecalc',
    name: 'GradeCalc',
    component: GradeCalc
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
