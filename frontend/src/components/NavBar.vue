<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div >
                <a class="branding">GradeHub</a>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link :to="{ name: 'GradeCalc'}" class="link">Grade Calculator</router-link></li>
                <li><router-link to="{ name: ''}" class="link">GPA Calculator</router-link></li>
                <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
                <li><router-link to="{ name: ''}" class="link">Final Grade</router-link></li>
            </ul>
            <div class="icon">
                <i class="far fa-bars" @click="toggelMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav" class='dropdown-nav'>
                <ul v-show="mobileNav" class="navigation">
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
      scrolledPosition: null,
      mobile: true,
      mobileNav: null,
      windowWidth: null
    }
  },
  methods: {
    toggelMobileNav () {
      this.mobileNav = !this.mobileNav
    }
  }
}
</script>
<style lang="scss" scoped>
header {
    background-color: rgba(0,0,0,0.8);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;
    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 90%;
        @media(min-width: 1140px) {
            max-width:1140px;
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
                color: #00afea;
                border-bottom: 1px solid #00afea;
            }
        }
        .branding {
            display: flex;
            align-items: center;
        }
        a {
            width: 50px;
            transition: .5 ease all;
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
            li {
                margin-left: 0;
                .link{
                    color: #000;
                }
            }
        }
    }
}
</style>
