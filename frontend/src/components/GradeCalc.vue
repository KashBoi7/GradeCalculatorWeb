<template>
  <section class="home">
    <div class="mid-box">
      <div>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
          <table class="table no" style="width:100%">
          <thead>
              <tr >
                <th scope="col" class="white">Category/Assignment</th>
                <th scope="col">Grade(%)</th>
                <th class="white" scope="col" >Grade Letter</th>
                <th scope="col" >
                  <span class="white">
                    Weight(%)
                  </span>
                </th>
              </tr>
           </thead>
           <tbody>
            <TransitionGroup name="list">
                <tr v-for="index in x" :key="index">
                    <td scope="col">
                        <input v-if="index == 1" class="box" v-model="category[index-1]" placeholder="e.g. Participation">
                        <input v-else-if="index == 2" class="box" v-model="category[index-1]" placeholder="e.g. Homework">
                        <input v-else v-model="category[index-1]" class="box">
                    </td>
                    <td scope="col">
                      <input v-if="index == 1" class="small-box box" v-model.lazy="grade[index-1]" placeholder="e.g. 91" type="number">
                      <input v-else-if="index == 2" class="small-box box" v-model.lazy="grade[index-1]" placeholder="e.g. 94" type="number">
                      <input v-else class="small-box box " v-model.lazy="grade[index-1]" type="number">
                    </td>
                    <td scope="col">
                      <select v-if="index == 1" class="small-box box" v-model="grade_letter[index-1]" placeholder="e.g. A-">
                        <option>- -</option>
                        <option>A+</option>
                        <option>A</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B</option>
                        <option>B-</option>
                        <option>C+</option>
                        <option>C</option>
                        <option>C-</option>
                        <option>D+</option>
                        <option>D</option>
                        <option>D-</option>
                        <option>F</option>
                      </select>
                      <select v-else-if="index == 2" class="small-box box" v-model="grade_letter[index-1]" placeholder="e.g. A">
                        <option>- -</option>
                        <option>A+</option>
                        <option>A</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B</option>
                        <option>B-</option>
                        <option>C+</option>
                        <option>C</option>
                        <option>C-</option>
                        <option>D+</option>
                        <option>D</option>
                        <option>D-</option>
                        <option>F</option>
                      </select>
                      <select v-else class="small-box box" v-model="grade_letter[index-1]">
                        <option>- -</option>
                        <option>A+</option>
                        <option>A</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B</option>
                        <option>B-</option>
                        <option>C+</option>
                        <option>C</option>
                        <option>C-</option>
                        <option>D+</option>
                        <option>D</option>
                        <option>D-</option>
                        <option>F</option>
                      </select>
                    </td>
                    <td scope="col" >
                      <input v-if="index == 1" class="small-box box" v-model="weight[index-1]" placeholder="e.g. 10" type="number">
                      <input v-else-if="index == 2" class="small-box box" v-model="weight[index-1]" placeholder="e.g. 20" type="number">
                      <input v-else class="small-box box" v-model="weight[index-1]" type="number">
                    </td>
                     <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </tr>
             </TransitionGroup>
           </tbody>
          </table>
          <button @click="increase" type="button" class="btn btn-outline-dark">Add Row</button>
          <button @click="calculate" type="button" class="btn btn-outline-success">Calculate</button>
          <div v-show='correct' class="FinalGradeBox">
            <h3>Your Grade: {{FinalGrade}}</h3>
          </div>
           <div v-show='incorrect' class="alert alert-danger" role="alert">
  Fill out the missing fields
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'GradeCalc',
  components: {},
  data () {
    return {
      correct: null,
      incorrect: null,
      x: 5,
      weight: [],
      grade: [],
      grade_letter: [],
      category: [],
      FinalGrade: null
    }
  },
  methods: {
    increase () {
      this.x++
    },
    calculate () {
      let g = 0
      let w = 0
      let div = 0
      this.FinalGrade = 0
      for (let i = 0; i < this.x; i++) {
        if ((this.grade[i] == null & this.weight[i] == null)) {
          g = 0
          w = 0
        } else if (this.grade[i] === '' & this.weight[i] === '') {
          g = 0
          w = 0
        } else {
          g = this.grade[i]
          w = this.weight[i]
        }
        div = div + w
        this.FinalGrade = this.FinalGrade + (g * w)
      }
      this.FinalGrade = (this.FinalGrade / div)
      if (isNaN(this.FinalGrade)) {
        this.incorrect = true
        this.correct = false
      } else {
        this.incorrect = false
        this.correct = true
      }
    }
  }

}
</script>

<style lang="scss" scoped>
section {
  background-image: url("..\\assets\\5291450.jpg");
  background-attachment: fixed;
  position: relative;
  height: 300vh;
  padding:130px;
    img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
 .mid-box {
    width: 570px;
    height: fit-content;
    border-radius: 10px;
    background-color: rgba(250, 250, 250,0.8);
    vertical-position: relative;
    horizontal-position: absolute;
    margin: auto;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    tr{
      outline: 0;
    }
    .table {
      border: none;
    }
    .btn-outline-dark{
      margin-right: 10px;
      margin-left: 8px;
      margin-bottom: 10px;
    }
    .btn-outline-success{
      margin-bottom: 10px;
    }
    .btn-outline-danger{
      margin-right:10px;
    }

    &:before {
      filter: blur(4px);
}
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
      }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
}
}
  section .mid-box:before{
    filter: blur(48px);
  }
.white {
  font-color: white;
}
.FinalGradeBox {
  border: 2px solid #00d084;
  border-radius: 5px;
  background-color : rgba(0, 212, 145,0.14);
  color : rgba(0, 212, 145,0.14);
  text-align: center;
}
.alert-danger {

}
.box{
  display: block;
  padding: 10px 6px;
  background-color : transparent;
  color: black;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid black;
  height: 35px;
  outline: 0;
  font-size: 16px;
}
.small-box{
  width:90px;
}
</style>
