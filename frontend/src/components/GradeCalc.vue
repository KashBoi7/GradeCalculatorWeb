<template>
  <div class="home">
      <!-- <h1
        class="text-center bg-primary text-white"
        style="border-radius: 10px"
        >
        Grade Calculator
      </h1> -->
    <div class="mid-box">
      <div class="row">
        <div class="col-sm-12">
          <table class="table table-hover" style="width:100%">
          <thead>
              <tr >
                <th scope="col" class="white">Category</th>
                <th scope="col" class="white">Grade(%)</th>
                <th scope="col" class="white">Grade Letter</th>
                <th scope="col" required class="white">Weight</th>
              </tr>
           </thead>
           <tbody>
              <tr v-for="index in 4" :key="index">
                <td scope="col">
                  <input class="box">
                </td>
                <td scope="col">
                  <input class="small-box box">
                </td>
                <td scope="col">
                  <input class="small-box box">
                </td>
                <td scope="col" >
                  <input class="small-box box">
                </td>
              </tr>
           </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'GradeCalc',
  components: {}
}
</script>

<style lang='scss' scoped>
.mid-box {
    width: 570px;
    height: 75%;
    border-radius: 10px;
    background-color: rgba(220, 222, 220);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    align-items: center;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    .white{
      foreground-color: white;
    }
}
.box{
  display: block;
  padding: 10px 6px;
  background-color : rgba(220, 222, 220,0.8);
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgb(255, 255, 255);
  height: 35px;
}
.small-box{
  width:90px;
}
.hero {
  background-image: url("../assets/hero-bg.png");
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
