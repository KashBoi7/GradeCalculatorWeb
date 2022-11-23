<template>
<section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

<div class="mid-box">
            <div class="contain">
            <h1 style="margin-botton: 20px ;">Sign Up</h1>
            <p>Email</p>
            <div class="sm">
              <img src="..\\assets\\mail.png"  style="margin-right:3px;"/>
               <input v-model="email" required type="username" style="border: none; outline: 0; font-size: 19px; background-color : transparent;">
          </div>
            <p>Password</p>
            <div class="sm">
              <img src="..\\assets\\padlock.png" style="margin-right:3px;"/>
               <input v-model="password" required type="password" style="border: none; outline: 0; font-size: 19px; background-color : transparent;">
          </div>
             <button @click='register' requ
            ired class="btn btn-lg btn-primary">Sign Up</button>
            <br>
        <router-link :to="{ name: 'LogIn'}" class="links">Already have an account?</router-link>

            
            
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
    const confirm_password = ref("");
    const router = useRouter();
    const auth = getAuth();
    const register = () => {
        if(password.value==confirm_password.value){
        createUserWithEmailAndPassword(getAuth(),email.value, password.value)
        .then((data) =>{ 

            console.log(auth.currentUser);
             router.push('/gradetracker')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        })
        }
    };

    </script>