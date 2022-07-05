<template>
  <div class='app'>
    <NavBar/>
  </div>
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
