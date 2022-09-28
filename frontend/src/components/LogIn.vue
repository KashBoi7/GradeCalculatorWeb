<template>
<section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

<div class="mid-box">
            <div class="contain">
            <h5>Username</h5>
            <input v-model="email" required type="username" class="sm" min="0" max="150">
            <h5>Password</h5>
            <input v-model="password" required type="password" class="sm" min="0" max="150">
            <router-link :to="{ name: 'SignUp'}" class="links">Don't Have an Account?</router-link>
            <br>
            <p v-if="errMsg">{{errMsg}}</p>
            <button @click='register' requ
            ired class="btn btn-outline-success">Sign Up</button>
          </div>
</div>
</section>
</template>
<script setup>
    import {ref} from "vue";
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from 'vue-router';
    const email = ref("");
    const password = ref("");
    const router = useRouter()
    const errMsg = ref();
    const register = () => {
        signInWithEmailAndPassword(getAuth(),email.value, password.value)
        .then((data) =>{
            router.push('/gradetracker')
            console.log("Successfully registered!");
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
              case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
              case "auth/user-not-found":
                errMsg.value = "No Account with that email was found";
                break;
              case "auth/wrong-passwordl":
                errMsg.value = "Incorrect Passwordl";
                break;
              default:
                errMsg.value = "Email or password was incorrect";
                break;
            }
        })
    };

    </script>