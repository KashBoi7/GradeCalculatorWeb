<template>
<section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

<div class="mid-box">
            <div class="contain">
          <form>
            <h5>Username</h5>
            <input v-model="username" required type="username" class="sm" min="0" max="150">
            <h5>Password</h5>
            <input v-model="password" required type="password" class="sm" min="0" max="150">
            <router-link :to="{ name: 'LogIn'}" class="links">Log In</router-link>
            <br>
            <button @click='loginz' requ
            ired class="btn btn-outline-success">Sign Up</button>
            </form>
          </div>
</div>
</section>
</template>
<script>
import GradeTracker from './GradeTracker.vue'
export default{
    name: 'LogIn',
    data(){
      return{
        username: null,
        password: null,
        num: 0,
      }
    },
    methods: {
      loginz(){
        if(this.username=="kauven303" && this.password=="123"){
          this.$router.push({ name: 'GradeTracker' });
        }
          // this.$router.push('GradeTracker') 
        
      }
    }
}
</script>