<template>
    <section class="Final">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
        <div class="contain">
        <h1>Final Grade Calculator</h1>
          <div class="mid-box margin">
          <form>
            <h5>My current grade(%):</h5>
            <input v-model="current" required type="number" class="sm" min="0" max="150" placeholder="e.g. 89">
            <h5>My desired overall grade(%):</h5>
            <input v-model="desired" required type="number" class="sm" min="0" max="150" placeholder="e.g. 92">
            <h5>My final's weight(%):</h5>
            <input v-model="weight" required type="number" class="sm" min="0" max="100" placeholder="e.g. 10">
            <button @click='Calculate' required type="button" class="btn btn-outline-success">Calculate</button>
            </form>
            <Transition name="bounce">
              <div v-show='correct' class="FinalGradeBox" style="border: none;">
              <h4 class="req">You need to get at least {{required}}% on your final</h4>
            </div>
          </Transition>
          </div>
          <h2 class="head">How to use it?</h2>
          <p class="text">In the first blank simply type your current grade. Then in the second blank type in what grade you want to have after taking your final exam.
          Lastly in the third blank type in how much your final exam is weighted in percent. Now simply press the 'calculate' button.</p>
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
  max-width: 45%;
  min-width: 45%;
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

.req {
    color : black;
    margin: 30px;
}
</style>
<script>
import { getFirestore, collection, addDoc, setDoc, doc } from 'firebase/firestore';
  export default {
  name: 'FinalGrade',
  data () {
    return {
      current: null,
      weight: null,
      desired: null,
      required: null,
      finalWeight: null,
      correct: null
    }
  },
  methods: {
    Calculate() {
      if (this.current === null||this.current === ""||this.weight === ""||this.current === null||this.desired === null||this.desired === ""){
        this.correct = false
      } else {
      this.correct = true
      this.finalWeight = this.weight/100
        this.required = (this.desired - (this.current*(1 - this.finalWeight)))/this.finalWeight
        this.required = Math.round(100*this.required)/100
      }

    }
  }
}
</script>
