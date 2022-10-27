<template>
<section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

<div class="mid-box">
            <div class="contain">
            <h5>E-Mail</h5>
            <input v-model="email" required type="username" class="sm" min="0" max="150">
            <h5>Password</h5>
            <input v-model="password" required type="password" class="sm" min="0" max="150">
            <h5>Confirm Password</h5>
            <input v-model="password" required type="password" class="sm" min="0" max="150">
             <button @click='register' requ
            ired class="btn btn-outline-success">Sign Up</button>
            <br>
            <router-link :to="{ name: 'LogIn'}" class="links">Log In</router-link>
            
          </div>
</div>
</section>
</template>
<script setup>
    import {ref} from "vue";
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from 'vue-router';
    const email = ref("");
    const password = ref("");
    const router = useRouter()
    const register = () => {
        createUserWithEmailAndPassword(getAuth(),email.value, password.value)
        .then((data) =>{ 

            console.log("Successfully registered!");
             router.push('/gradetracker')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
    };

    </script>