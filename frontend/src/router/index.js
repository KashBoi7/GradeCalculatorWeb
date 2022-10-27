import { createRouter, createWebHistory } from 'vue-router'
import GradeCalc from '@/components/GradeCalc.vue'
import FinalGrade from '@/components/FinalGrade.vue'
import HomeView from '@/components/HomeView.vue'
import ComingSoon from '@/components/ComingSoon.vue'
import GradeTracker from '@/components/GradeTracker.vue'
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";
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
// router.beforeEach((to, from, next) => {
//   let loggedIn;
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
// const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//   if (user) {
//     loggedIn = true;
//   } else {
//   loggedIn = false;
//   }
//     });
//      if (!loggedIn) {
//             next('/login')
//         }
//   } else {
//     next();
//   }
// })
export default router
