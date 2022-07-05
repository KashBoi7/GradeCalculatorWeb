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
    width: 25%;
    height: 150%;
    border-radius: 10px;
    background-color: rgba(220, 222, 220,0.8);
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
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
