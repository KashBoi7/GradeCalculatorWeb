
<template>
  <div class="home">
  <div class="contain" id="contain">
    <h1 class="Heading">Grade Calculator</h1>
    <div class="mid-box">
      <div>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
          <table class="table no" style="width:100%">
          <thead>
              <tr >
                <th scope="col" width="37%" class="white">Category/Assignment</th>
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
    <router-link :to="{ name: 'FinalGrade'}" type="button" class="btn btn-link">See what you need to get on your final?</router-link> 
    <h2 class="head">How to Use it?</h2>
    <p class="text">Using the Grade calculator is quite simple. In the Category/Assignment column simply input a grading category (Participation, Homework, Classwork, etc.). Then input your grade for that category. You can either input the percentage of the letter. 
    And lastly, type in how much each category is weighted. If your graded based on more than five categories just press the 'Add Row' button to create additonal rows. Now just press calculate button and your grade will be displayed to you. Below is an example of how to use this calculator. In Math, Bob gets a grade of 87%/B+ on his homework, 95/A in participation, and a 90/A- in quizzes/tests. Each category is weighted at 30%, 10%, and 60% respectively. As shown below, his overall grade is 89.6%, or a B+. </p>
        <img src="..\\assets\\example.png">
    <h2 class="head">Additional Applications</h2>
    <p class="text">Not only can this be used as a grade calculator but you can also use it to find your average grade. All you need to do is name your courses and their corresponding grades. 
    For the weigtht column make sure to weight all of your courses evenly by inputting the same number on each row. To add more courses hit the 'add row' button.
    Now simply press the calculate button to get your average grade. An example is shown below.  </p>
    <h2 class="head">Extra Info</h2>
    <p class="text">The grade calculator uses a simple formula to calculate your grade. You can use this formula by yourself.</p>
    </div>
  </div>
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
      mobile: null,
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
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
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
    checkScreen () {
      this.windowWidth = window.innerWidth
      const box = document.getElementById('contain')
      if (this.windowWidth <= 800) {
      } else if(this.windowWidth > 800) {
      }
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
        this.FinalGrade = Math.round(100*this.FinalGrade)/100
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

<style lang="scss">
.btn-link{
  outline: 0;
}
.text{
  text-align: left;
}
img{
  text-align: center;
  max-width: 100%;
  max-height: 100%;
}
body{
  background-image: url("..\\assets\\5291450.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
section {
  position: relative;
  height: 100vh;
  padding-top:130px;
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }
}
.Heading{
  text-shadow: 0 2px rgba(0, 217, 177,0.9);
}
.head{
  margin-top: 50px;
  text-align:left;
}
.contain{
  text-align:center;
  background-color: rgba(255,255,255,0.93);
  max-width: 70%;
  min-width: fit-content;
   padding: 2%;
  min-padding: 10px;
    height: fit-content;
    border-radius: 10px;
    vertical-position: relative;
    horizontal-position: absolute;
    margin: auto;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    min-width: 550px;
}
 .mid-box {

    max-width: 570px;
    height: fit-content;
    min-width: fit-content;
    border-radius: 10px;
    background-color: transparent;
    border: 1px solid rgb(0, 217, 177);
    margin: auto;
    box-shadow:  0 0 20px rgba(0, 217, 177,0.3);
    tr{
      outline: 0;
    }
    .table {
      border: none;
      table-layout:fixed;
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
  border-radius: 10px;
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
.home{
  padding-top:130px;
  padding-bottom:130px;
  width:100%;
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
  min-width: 100%;
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
  width: 75%;
}
</style>
