<template>
<section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

<div class="mid-box">

            <div class="contain">
            <h1 style="margin-botton: 20px ;">Login</h1>
            <h5>Email</h5>
            <div class="sm">
              <img src="..\\assets\\mail.png"  style="margin-right:3px;"/>
               <input v-model="email" required type="username" style="border: none; outline: 0; font-size: 19px; background-color : transparent;">
          </div>
            <h5>Password</h5>
            <div class="sm">
              <img src="..\\assets\\padlock.png" style="margin-right:3px;"/>
               <input v-model="password" required type="password" style="border: none; outline: 0; font-size: 19px; background-color : transparent;">
          </div>
           

            <p v-if="errMsg">{{errMsg}}</p>
            <button @click='login' requ
            ired class="btn btn-lg btn-primary">Log In</button>
            <br>
                        <router-link :to="{ name: 'SignUp'}" class="links">Don't Have an Account?</router-link>
            <br>
            <router-link :to="{ name: 'SignUp'}" class="links">Forgot Password?</router-link>
            <br>
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
    const auth = getAuth();
    const login = () => {
        signInWithEmailAndPassword(getAuth(),email.value, password.value)
        .then((data) =>{
            router.push('/gradetracker')
            console.log("Successfully Logged In!");
            console.log(auth.currentUser)
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
              case "auth/wrong-password":
                errMsg.value = "Incorrect Password";
                break;
              default:
                errMsg.value = "Email or password was incorrect";
                break;
            }
        })
    };

    </script>
    <style lang='scss'>
  .btn-lg{
    width: 45%;
    margin-bottom: 10px;
  }
    </style>