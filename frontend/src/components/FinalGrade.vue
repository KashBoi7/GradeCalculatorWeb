<template>
    <section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
        <div class="contain">
        <h2>Final Grade Calculator</h2>
          <div class="mid-box margin">
          <form>
            <h5>My current grade:</h5>
            <input v-model="current" required type="number" class="sm" min="0" max="150">
            <h5>My final's weight:</h5>
            <input v-model="weight" required type="number" class="sm" min="0" max="100">
            <h5>My desired overall grade:</h5>
            <input v-model="desired" required type="number" class="sm" min="0" max="150">
            <button @click='Calculate' required type="button" class="btn btn-outline-success">Calculate</button>
            </form>
          </div>
        </div>
    </section>
</template>
<style lang='scss'>
.Final{
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  padding-top:170px;
  text-align:center;
}
.sm{
    display: flex;
  max-padding: 10px 6px;
  background-color : transparent;
  color: black;
  border: none;
  border-bottom: 2px solid black;
  height: 40px;
  max-width: 40%;
  min-width: 40%;
  outline: 0;
  font-size: 16px;
    margin: auto;
  margin-bottom:20px;
  text-align: center;
}
.margin{
  padding-top:20px;
}
@keyframes boxin {
  0% {border-bottom: 2px solid black;}
  100% {  border-bottom: 2px solid rgb(0, 217, 177);}
}
.sm:focus{
  animation-name: boxin;
  animation-duration: 0.4s;
  border-bottom: 2px solid rgb(0, 217, 177);
}
</style>
<script>
  export default {
  name: 'FinalGrade',
  data () {
    return {
      current: null,
      weight: null,
      desired: null
    }
  },
  methods: {
    Calculate() {
        
    }
  }
}
</script>
