<template>
  <div class='app'>
    <NavBar/>
  </div>
                  <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>

  <router-view/>
</template>
<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
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
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
};
</script>
