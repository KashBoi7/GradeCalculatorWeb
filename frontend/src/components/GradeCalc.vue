<template>
  <div class="hero">
      <!-- <h1
        class="text-center bg-primary text-white"
        style="border-radius: 10px"
        >
        Grade Calculator
      </h1> -->
    <div class="mid-box">
      <div>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
          <table class="table no" style="width:100%">
          <thead>
              <tr >
                <th scope="col" class="white">Category</th>
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
              <tr v-for="index in x" :key="index">
                <td scope="col">
                  <input v-if="index == 1" class="box" placeholder="e.g. Participation">
                  <input v-else-if="index == 2" class="box" placeholder="e.g. Homework">
                  <input v-else class="box">
                </td>
                <td scope="col">
                  <input v-if="index == 1" class="small-box box" placeholder="e.g. 91">
                  <input v-else-if="index == 2" class="small-box box" placeholder="e.g. 94">
                  <input v-else class="small-box box">
                </td>
                <td scope="col">
                  <input v-if="index == 1" class="small-box box" placeholder="e.g. A-">
                  <input v-else-if="index == 2" class="small-box box" placeholder="e.g. A">
                  <input v-else class="small-box box">
                </td>
                <td scope="col" >
                  <input v-if="index == 1" class="small-box box" placeholder="e.g. 10">
                  <input v-else-if="index == 2" class="small-box box" placeholder="e.g. 20">
                  <input v-else class="small-box box">
                </td>
              </tr>
           </tbody>
          </table>
          <button @click="increase" type="button" class="btn btn-outline-dark">Add Class</button>
          <button type="button" class="btn btn-outline-success">Calculate</button>
        </div>
      </div>
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
      x: 4
    }
  },
  methods: {
    increase () {
      this.x++
    }
  }

}
</script>

<style lang='scss' scoped>
.mid-box {
    width: 570px;
    height: 75%;
    border-radius: 10px;
    background-color: rgba(250, 250, 250,0.8);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    tr{
      outline: 0;
    }
    .table {
      border: none;
    }
    .btn{
      margin-right: 10px;
    }
}
.white {
  font-color: white;
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
.hero {
  background-image: url("..\\assets\\5291450.jpg");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
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
</style>
