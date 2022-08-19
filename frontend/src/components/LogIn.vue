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
            <button @click='login' required type="button" class="btn btn-outline-success">Log In</button>
            </form>
            <Transition name="bounce">
              <div v-show='correct' class="FinalGradeBox" style="border: none;">
              <h4 class="req">You need to get at least {{required}}% on your final</h4>
            </div>
          </Transition>
          </div>
</div>
</section>
</template>
<script>
import Home from './GradeTracker.vue'
export default{
    name: 'FinalGrade',
    data(){
      return{
        username: null,
        password: null,
      }
    },
    methods: {
      login(){
        if(username=="kauven303"&&password=="123"){
          this.$router.push({name:'GradeTracker'})
        }
      }
    }
}
</script>