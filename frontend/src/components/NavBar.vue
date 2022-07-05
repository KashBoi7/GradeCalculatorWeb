<template>
    <header :class="{'scrolled-nav': scrolledNav}">
        <nav>
            <div >
                <h2 class="branding">GradeHub</h2>
            </div>
            <ul v-show="!mobile" class="navigations">
                <li><router-link :to="{ name: 'GradeCalc'}" class="link">Grade Calculator</router-link></li>
                <li><router-link to="{ name: ''}" class="link">GPA Calculator</router-link></li>
                <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
                <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
            </ul>
            <div class="icon">
                <i class="far fa-bars" @click="toggelMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav" class='dropdown-nav'>
                <ul v-show="mobileNav" class="navigations">
                    <li><router-link :to="{ name: 'GradeCalc'}" class="link">Grade Calculator</router-link></li>
                    <li><router-link to="{ name: ''}" class="link">GPA Calculator</router-link></li>
                    <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
                    <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
                </ul>
            </transition>
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
<style lang="scss" scoped>
header {
    background-color: rgba(2,181,157,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    nav {
        display: flex;
        flex-direction: row;
        padding: 9px 0;
        transition: .5s ease all;
        width: 90%;
        @media(min-width: 1140px) {
        }
        ul,
        .link {
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
        .link{
            font-size: 14px;
            transition: .5 ease all;
            padding-bottom: 4px;
            &:hover {
                color: rgba(255, 255, 255);
                border-bottom: 1px solid rgba(255, 255, 255);
            }
        }
        .branding {
            display: flex;
            align-items: center;
            a {
                width: 50px;
                transition: .5 ease all;
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
                .link{
                    color: #000;
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
  background-color: (2,181,157,1);
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);
  nav {
    padding: 6px 0;
    .branding {
        img {
            width: 40px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.6);
        }
    }
  }
}
</style>
