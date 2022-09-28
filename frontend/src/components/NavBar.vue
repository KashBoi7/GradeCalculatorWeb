<template>
    <header :class="{'scrolled-nav': scrolledNav}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
        <nav>
            <div >
                <router-link :to="{ name: 'HomeView'}"  class="brandings">gradeaxis</router-link>
            </div>
            <ul v-show="!mobile" class="navigations">
                <li><router-link :to="{ name: 'GradeCalc'}" class="links">Grade Calculator</router-link></li>
                <li><router-link :to="{ name: 'ComingSoon'}" class="links">GPA Calculator</router-link></li>
                <li><router-link :to="{ name: 'FinalGrade'}" class="links">Final Grade</router-link></li>
                <li><router-link :to="{ name: 'GradeTracker'}" class="links">Grade Tracker</router-link></li>
            </ul>
            <div class="icon">
                <i class="far fa-bars" @click="toggelMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav" class='dropdown-nav'>
                <ul v-show="mobileNav" class="navigations">
                    <li><router-link :to="{ name: 'GradeCalc'}" class="links">Grade Calculator</router-link></li>
                    <li><router-link :to="{ name: 'ComingSoon'}" class="links">GPA Calculator</router-link></li>
                    <li><router-link :to="{ name: 'FinalGrade'}" class="links">Final Grade</router-link></li>
                    <li><router-link :to="{ name: 'GradeTracker'}" class="links">Grade Tracker</router-link></li>
                </ul>
            </transition>
            <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
        </nav>
    </header>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggelMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    updateScroll () {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
      } else {
        this.scrolledNav = false
      }
    },

    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
      } else {
        this.mobile = false
        this.mobileNav = false
      }
    }
  }
}
</script>
<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        isLoggenIn.value= true;
      } else{
        isLoggenIn.value= false;
      }
    })
})
</script>
<style lang="scss" scoped>
header {
    height: 70px;
    background-color: rgba(2,181,157,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    nav {
        margin-bottom: auto;
        margin-top: auto;
        display: flex;
        flex-direction: row;
        padding: 4px 0;
        padding-bottom: 0px;
        transition: .5s ease all;
        width: 90%;
        @media(min-width: 1140px) {
        }
        ul,
        .links {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }
        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }
        .links{
            font-size: 14px;
            transition: .5 ease all;
            padding-bottom: 4px;
            &:hover {
                color: rgba(255, 255, 255);
                border-bottom: 1px solid rgba(255, 255, 255);
            }
        }
        .brandings {
            font-size: 34px;
            transition: .5 ease all;
            padding-bottom: 4px;
            font-weight: bold;
            color: white;
            font-family: 'Poiret One', cursive;
            &:hover {
                color: rgba(255, 255, 255);
            }
        }
        .navigations {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }
        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: .8s ease all;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }
        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #fff;
            top: 0;
            left:0;
            justify-content: flex-start;
            li {
                margin-left: 0;
                .links{
                    color: rgba(0,0,0);
                }
            }
        }
        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
          transition: 1s ease all;
        }
        .mobile-nav-enter-from {
          transform: translateX(-250px);
        }
        .mobile-nav-enter-to {
          transform: translateX(-250px);
        }
        .mobile-nav-enter-to {
          transform: translateX(0);
        }
    }
}
.scrolled-nav {
  height: 53px;
  background-color: rgb(2,181,157);
    nav {
        margin-bottom: auto;
        margin-top: auto;
        display: flex;
        flex-direction: row;
        padding: 0px 0;
        padding-bottom: 0px;
        transition: .5s ease all;
        width: 90%;
      .branding {
          img {
              width: 40px;
          }
      }
    }
}
</style>
