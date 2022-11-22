import { createRouter, createWebHistory } from 'vue-router'
import GradeCalc from '@/components/GradeCalc.vue'
import FinalGrade from '@/components/FinalGrade.vue'
import HomeView from '@/components/HomeView.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import GradeTracker from '@/components/GradeTracker.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import { getAuth } from "firebase/auth";
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
    component: GradeTracker,
        meta: {
      requiresAuth: true,
    },
  },
    {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
        {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You don't have access")
      next("/")
    }
  } else {
    next();
  }
})
export default router