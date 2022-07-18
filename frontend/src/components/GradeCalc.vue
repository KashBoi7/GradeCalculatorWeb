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
                      <input @change='getLetter(index-1)' v-if="index == 1" class="small-box box" v-model.lazy="grade[index-1]" placeholder="e.g. 91" type="number" min="0" max="300">
                      <input @change='getLetter(index-1)' v-else-if="index == 2" class="small-box box" v-model.lazy="grade[index-1]" placeholder="e.g. 94" type="number" min="0" max="300">
                      <input @change='getLetter(index-1)' v-else class="small-box box " v-model.lazy="grade[index-1]" type="number" min="0" max="300">
                    </td>
                    <td scope="col">
                      <select @change='getPercent(index-1)' class="selectbox box" v-model="grade_letter[index-1]" >
                        <option  v-for="option in options" :value="option.value" :key='option'>{{ option.label }}</option>
                      </select>
                    </td>
                    <td scope="col">
                      <input v-if="index == 1" class="small-box box" v-model="weight[index-1]" placeholder="e.g. 10" type="number" min="0" max="300">
                      <input v-else-if="index == 2" class="small-box box" v-model="weight[index-1]" placeholder="e.g. 20" type="number" min="0" max="300">
                      <input v-else class="small-box box" v-model="weight[index-1]" type="number" min="0" max="300">
                    </td>
                </tr>
             </TransitionGroup>
           </tbody>
          </table>
          <button @click='decrease' type="button" class="btn btn-outline-danger">Remove</button>
          <button @click="increase" type="button" class="btn btn-outline-dark">Add Row</button>
          <button @click="calculate" type="button" class="btn btn-outline-success">Calculate</button>
          <Transition name="bounce">
          <div v-show='correct' class="FinalGradeBox" id="Final">
            <h4 id="letter" class="letter">Your Grade: {{FinalGradeLetter+" "+FinalGrade+'%'}}</h4>
          </div>
          </Transition>
          <Transition name="bounce">
            <div v-show='incorrect' class="alert alert-danger" role="alert">
    Fill out the missing fields
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    </Transition>
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
      selected: null,
      correct: null,
      incorrect: null,
      x: 5,
      weight: [],
      grade: [],
      grade_letter: [],
      category: [],
      FinalGrade: null,
      FinalGradeLetter: null,
      idk: null,
      grades: {
        'A+': 97,
        A: 93,
        'A-': 90,
        'B+': 87,
        B: 83,
        'B-': 80,
        'C+': 77,
        C: 73,
        'C-': 70,
        'D+': 67,
        D: 63,
        'D-': 60,
        F: 59

      },
      options: [
        {
          label: '- -',
          value: '- -'
        },
        {
          label: 'A+',
          value: 'A+'
        },
        {
          label: 'A',
          value: 'A'
        },
        {
          label: 'A-',
          value: 'A-'
        },
        {
          label: 'B+',
          value: 'B+'
        },
        {
          label: 'B',
          value: 'B'
        },
        {
          label: 'B-',
          value: 'B-'
        },
        {
          label: 'C+',
          value: 'C+'
        },
        {
          label: 'C',
          value: 'C'
        },
        {
          label: 'C-',
          value: 'C-'
        },
        {
          label: 'D+',
          value: 'D+'
        },
        {
          label: 'D',
          value: 'D'
        },
        {
          label: 'D-',
          value: 'D-'
        },
        {
          label: 'F',
          value: 'F'
        }
      ]
    }
  },
  created () {
    for (let i = 0; i < this.x; i++) {
      this.grade_letter[i] = this.options[0].label
    }
  },
  methods: {

    // adds rows
    increase () {
      this.x++
      this.grade_letter[this.x - 1] = this.options[0].label
    },
    // removes rows
    decrease () {
      this.x--
    },
    // fills the grade textbox after you select the corresponding letter
    getPercent (i) {
      for (const [key, value] of Object.entries(this.grades)) {
        if (key === this.grade_letter[i]) {
          this.grade[i] = value
        }
      }
      if (this.grade_letter[i] === '- -') {
        this.grade[i] = null
      }
    },
    // fills the grade_letter selectbox after you stype in the corresponding percentage
    getLetter (i) {
      if (this.grade[i] >= 97) {
        this.grade_letter[i] = 'A+'
      } else if (this.grade[i] >= 93) {
        this.grade_letter[i] = 'A'
      } else if (this.grade[i] >= 90) {
        this.grade_letter[i] = 'A-'
      } else if (this.grade[i] >= 87) {
        this.grade_letter[i] = 'B+'
      } else if (this.grade[i] >= 83) {
        this.grade_letter[i] = 'B'
      } else if (this.grade[i] >= 80) {
        this.grade_letter[i] = 'B-'
      } else if (this.grade[i] >= 77) {
        this.grade_letter[i] = 'C+'
      } else if (this.grade[i] >= 73) {
        this.grade_letter[i] = 'C'
      } else if (this.grade[i] >= 70) {
        this.grade_letter[i] = 'C-'
      } else if (this.grade[i] >= 67) {
        this.grade_letter[i] = 'D+'
      } else if (this.grade[i] >= 63) {
        this.grade_letter[i] = 'D'
      } else if (this.grade[i] >= 60) {
        this.grade_letter[i] = 'D-'
      } else {
        this.grade_letter[i] = 'F'
      }
    },
    // code to calculate your final grade
    calculate () {
      let g = 0
      let w = 0
      let div = 0
      this.FinalGrade = 0
      for (let i = 0; i < this.x; i++) {
        if ((this.grade[i] == null & this.weight[i] == null)) {
          g = 0
          w = 0
        } else if (this.grade[i] === '' || this.weight[i] === '') {
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
        this.FinalGrade = this.FinalGrade.toFixed(2)
      }
      if (this.FinalGrade >= 97) {
        this.FinalGradeLetter = 'A+'
        document.getElementById('Final').style.border = '2px solid #00d084'
        document.getElementById('letter').style.color = '#00d084'
      } else if (this.FinalGrade >= 93) {
        this.FinalGradeLetter = 'A'
        document.getElementById('letter').style.color = '#00d084'
        document.getElementById('Final').style.border = '2px solid #00d084'
      } else if (this.FinalGrade >= 90) {
        this.FinalGradeLetter = 'A-'
        document.getElementById('letter').style.color = '#00d084'
        document.getElementById('Final').style.border = '2px solid #00d084'
      } else if (this.FinalGrade >= 87) {
        this.FinalGradeLetter = 'B+'
        document.getElementById('Final').style.border = '2px solid #99e600'
        document.getElementById('letter').style.color = '#99e600'
      } else if (this.FinalGrade >= 83) {
        this.FinalGradeLetter = 'B'
        document.getElementById('letter').style.color = '#99e600'
        document.getElementById('Final').style.border = '2px solid #99e600'
      } else if (this.FinalGrade >= 80) {
        this.FinalGradeLetter = 'B-'
        document.getElementById('letter').style.color = '#99e600'
        document.getElementById('Final').style.border = '2px solid #99e600'
      } else if (this.FinalGrade >= 77) {
        this.FinalGradeLetter = 'C+'
        document.getElementById('Final').style.border = '2px solid #e6e600'
        document.getElementById('letter').style.color = '#cccc00'
      } else if (this.FinalGrade >= 73) {
        this.FinalGradeLetter = 'C'
        document.getElementById('letter').style.color = '#cccc00'
        document.getElementById('Final').style.border = '2px solid #e6e600'
      } else if (this.FinalGrade >= 70) {
        this.FinalGradeLetter = 'C-'
        document.getElementById('letter').style.color = '#cccc00'
        document.getElementById('Final').style.border = '2px solid #e6e600'
      } else if (this.FinalGrade >= 67) {
        this.FinalGradeLetter = 'D+'
        document.getElementById('letter').style.color = '#ff8000'
        document.getElementById('Final').style.border = '2px solid #ff8000'
      } else if (this.FinalGrade >= 63) {
        this.FinalGradeLetter = 'D'
        document.getElementById('letter').style.color = '#ff8000'
        document.getElementById('Final').style.border = '2px solid #ff8000'
      } else if (this.FinalGrade >= 60) {
        this.FinalGradeLetter = 'D-'
        document.getElementById('letter').style.color = '#ff8000'
        document.getElementById('Final').style.border = '2px solid #ff8000'
      } else {
        this.FinalGradeLetter = 'F'
        document.getElementById('Final').style.border = '2px solid #ff0000'
        document.getElementById('letter').style.color = '#ff0000'
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
  height: 100vh;
  padding-top:130px;
    img {
    height: 200vh;
    width: 200vh;
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
    max-width: 570px;
    height: fit-content;
    min-width: 490px;
    border-radius: 10px;
    background-color: rgba(250, 250, 250,0.8);
    vertical-position: relative;
    horizontal-position: absolute;
    margin: auto;
    align-items: center;
    overflow: hide;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    tr{
      outline: 0;
    }
    .table {
      border: none;
      table-layout:auto;
      width:150px;
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
      margin-bottom: 10px;
    }

    &:before {
      filter: blur(4px);
}
    .list-enter-active,
    .list-leave-active {
      transition: all 0.3s ease;
      }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(30px);
}
  td {
    justify-content: center;
  }
}

.white {
  font-color: white;
}
.FinalGradeBox {
  display: flex;
  border: 2px solid #00d084;
  border-radius: 5px;
  background-color: transparent;
  justify-content: center;
  .letter {
    color : red;
    margin: 30px;
  }
}
.alert-danger {

}
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
.box{
  display: flex;
  max-padding: 10px 6px;
  background-color : transparent;
  color: black;
  border: none;
  border-bottom: 2px solid black;
  height: 40px;
  max-width: 100%;
  outline: 0;
  font-size: 16px;
}
@keyframes boxin {
  0% {border-bottom: 2px solid black;}
  100% {  border-bottom: 2px solid rgb(0, 217, 177);}
}
.box:focus{
  animation-name: boxin;
  animation-duration: 0.4s;
  border-bottom: 2px solid rgb(0, 217, 177);
}
.small-box{
  max-width: 100%;
}
.selectbox{
  width: 95%;
}
</style>
