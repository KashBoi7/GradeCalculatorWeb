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
    <section class="GradeCalc">
      <div class="containers">
        <h1>Grade Calculator</h1>
        <hr>
        <p>Our grade calculator helps you calculate your total grade. Use it to know what categories to increase to get your desired grade.</p>
        <router-link :to="{ name: 'GradeCalc'}" class="btn btn-success">Use It</router-link>
      </div>
    </section>
<div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
     <section class="FinalGrade">
      <div class="containers-right">
        <h1>Final Grade</h1>
        <hr>
        <p>Calculate what you need to get on your final to get your desired grade.</p>
        <router-link :to="{ name: 'FinalGrade'}" class="btn btn-success">Use It</router-link>
      </div>
    </section>
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
  background:  rgba(0, 217, 177,0.4);
  padding-top: 120px;
  padding-bottom: 120px;
}
.FinalGrade {
  background: rgb(69, 143, 255,0.4);
  padding-top: 120px;
  padding-bottom: 120px;
}
.containers {
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 15px;
  margin: auto;
    color: black;
  text-align: center;


}
.containers-right {
  text-align: center;
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  color: black;
}
.btn-success {
  transition: transform .9s;
  &:hover{
    transform: scale(1.2);

  }
}
.wave {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 269px;
}

.wave .shape-fill {
    fill: #00D9B166;
}
.custom-shape-divider-top-1659555227 {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1659555227 svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 98px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1659555227 .shape-fill {
    fill: #FFFFFF80;
}
</style>
// @ is an alias to /src
