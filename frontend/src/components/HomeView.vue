<template>
  <div >
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">
    <div class="hero">
        <div class="mid">
          <h1>GradeAxis</h1>
          <hr>
          <h2>Keep Track of Your Grades with Ease.</h2>
        </div>
    </div>
    <div class="GradeCalc">
      <div class="containers">
        <h2>Grade Calculator</h2>
        <hr>
        <p>Our grade calculator helps you calculate your total grade. Use it to know what categories to increase to get your desired grade.</p>
        <router-link :to="{ name: 'GradeCalc'}" class="btn btn-success">Use It</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.hero{
  background-color: #074f57;
  background-image: url("..\\assets\\5291450.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 200px;
  text-align: center;
}
.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.mid {
  margin: auto;
  width: 50%;
  align-items: center;
  padding: 25px 69px;
  color: black;
  width: fit-content;
  height: fit-content;

  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.GradeCalc {
  background: rgb(242, 247, 242);
  padding-top: 120px;
  padding-bottom: 120px;
}
.containers {
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.btn-success {
  transition: transform .9s;
  &:hover{
    transform: scale(1.2);

  }
}
</style>
// @ is an alias to /src
