import { createRouter, createWebHistory } from 'vue-router'
import GradeCalc from '@/components/GradeCalc.vue'
import FinalGrade from '@/components/FinalGrade.vue'
import HomeView from '@/components/HomeView.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import GradeTracker from '@/components/GradeTracker.vue'
const routes = [
  {
    path: '/gradecalc',
    name: 'GradeCalc',
    component: GradeCalc
  },
  {
    path: '/finalgrade',
    name: 'FinalGrade',
    component: FinalGrade
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/comingsoon',
    name: 'ComingSoon',
    component: ComingSoon
  },
  {
    path: '/gradetracker',
    name: 'GradeTracker',
    component: GradeTracker
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
