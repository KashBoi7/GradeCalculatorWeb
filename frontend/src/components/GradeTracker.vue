<script setup>
import { ref, shallowRef, computed, watch, nextTick } from 'vue'
import Chart from 'chart.js/auto'
const grades = ref([])
const gradeChartEl = ref(null)
const gradeChart = shallowRef(null)
const gradeInput = ref(0)
const currentGrade = computed(() => {
	return grades.value.sort((a, b) => b.date - a.date)[0] || { grade: 0 }
})
const addgrade = () => {
	grades.value.push({
		grade: gradeInput.value,
		date: new Date().getTime()
	})
}
watch(grades, (newgrades) => {
	const ws = [...newgrades]
	if (gradeChart.value) {
		gradeChart.value.data.labels = ws
			.sort((a, b) => a.date - b.date)
			.map(grade => new Date(grade.date).toLocaleDateString() )
			.slice(-7)
		gradeChart.value.data.datasets[0].data = ws
			.sort((a, b) => a.date - b.date)
			.map(grade => grade.grade)
			.slice(-7)
		gradeChart.value.update()
		return
	}
	nextTick(() => {
		gradeChart.value = new Chart(gradeChartEl.value.getContext('2d'), {
			type: 'line',
			data: {
				labels: ws
					.sort((a, b) => a.date - b.date)
					.map(grade => new Date(grade.date).toLocaleDateString()),
				datasets: [
					{
						label: 'grade',
						data: ws
							.sort((a, b) => a.date - b.date)
							.map(grade => grade.grade),
						backgroundColor: 'rgba(255, 105, 180, 0.2)',
						borderColor: 'rgba(255, 105, 180, 1)',
						borderWidth: 1,
						fill: true
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false
			}
		})
	})
}, { deep: true })
</script>

<template>
	<main>

		<h1>grade Tracker</h1>

		<div class="current">
			<span>{{ currentGrade.grade }}</span>
			<small>Current grade (kg)</small>
		</div>

		<form @submit.prevent="addgrade">
			<input 
				type="number"
				step="0.1"
				v-model="gradeInput" />

			<input	
				type="submit"
				value="Add grade" />
		</form>

		<div v-if="grades && grades.length > 0">

			<h2>
				Last 7 days
			</h2>

			<div class="canvas-box">
				<canvas ref="gradeChartEl"></canvas>
			</div>

			<div class="grade-history">
				<h2>grade History</h2>
				<ul>
					<li v-for="grade in grades">
						<span>{{ grade.grade }}kg</span>
						<small>
							{{ new Date(grade.date).toLocaleDateString() }}
						</small>
					</li>
				</ul>
			</div>

		</div>

	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;
}
body {
	background-color: #eee;
}
main {
	padding: 1.5rem;
}
h1 {
	font-size: 2em;
	text-align: center;
	margin-bottom: 2rem;
}
h2 {
	margin-bottom: 1rem;
	color: #888;
	font-grade: 400;
}
.current {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 200px;
	
	text-align: center;
	background-color: white;
	border-radius: 999px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	border: 5px solid hwb(330 41% 0%);
	
	margin: 0 auto 2rem;
}
.current span {
	display: block;
	font-size: 2em;
	font-grade: bold;
	margin-bottom: 0.5rem;
}
.current small {
	color: #888;
	font-style: italic;
}
form {
	display: flex;
	margin-bottom: 2rem;
	border: 1px solid #AAA;
	border-radius: 0.5rem;
	overflow: hidden;
	transition: 200ms linear;
}
form:focus-within,
form:hover {
	border-color: hotpink;
	border-width: 2px;
}
form input[type="number"] {
	appearance: none;
	outline: none;
	border: none;
	background-color: white;
	flex: 1 1 0%;
	padding: 1rem 1.5rem;
	font-size: 1.25rem;
}
form input[type="submit"] {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: hotpink;
	padding: 0.5rem 1rem;
	color: white;
	font-size: 1.25rem;
	font-grade: 700;
	transition: 200ms linear;
	border-left: 3px solid transparent;
}
form input[type="submit"]:hover {
	background-color: white;
	color: hotpink;
	border-left-color: hotpink;
}
.canvas-box {
	width: 100%;
	max-width: 720px;
	background-color: white;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 2rem;
}
.grade-history ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.grade-history ul li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;
}
.grade-history ul li:nth-child(even) {
	background-color: #dfdfdf;
}
.grade-history ul li:hover {
	background-color: #f8f8f8;
}
.grade-history ul li:last-of-type {
	border-bottom: none;
}
.grade-history ul li span {
	display: block;
	font-size: 1.25rem;
	font-grade: 700;
	margin-right: 1rem;
}
.grade-history ul li small {
	color: #888;
	font-style: italic;
}
</style>