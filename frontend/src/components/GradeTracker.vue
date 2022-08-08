<script setup>
import { getFirestore, collection, addDoc, setDoc, doc, Timestamp } from 'firebase/firestore';
import {db, gradeDoc, addGrade} from '@/firebaseinit'
import { ref, shallowRef, computed, watch, nextTick, reactive, onMounted } from 'vue'
import Chart from 'chart.js/auto'
const grades = ref([])
const gradeChartEl = ref(null)
const gradeChart = shallowRef(null)
const gradeInput = ref(100)
const currentGrade = computed(() => {
	return grades.value.sort((a, b) => b.date - a.date)[0] || { grade: 100 }
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
		gradeChart.value.data.datasets[0].data = ws
			.sort((a, b) => a.date - b.date)
			.map(grade => grade.grade)
		gradeChart.value.update()
			setDoc(gradeDoc,{
    	grade: grades.value,
		date: new Date().getTime()
    })
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
						backgroundColor: 'rgba(0, 217, 177,0.2)',
						borderColor: 'rgba(0, 217, 177,1)',
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
		grades.value.push({
			grade: 85,
			date: new Date().getTime()
		})
		grades.value.push({
			grade: 95,
			date: new Date().getTime()
		})
</script>

<template>
    <div class="Final">
	<main>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css" integrity="sha384-H4X+4tKc7b8s4GoMrylmy2ssQYpDHoqzPa9aKXbDwPoPUA3Ra8PA5dGzijN+ePnH" crossorigin="anonymous">

    <div class="contain">
    <div class='mid-box' style="padding:10px;">
		<h1>Grade Tracker</h1>

		<div class="current">
			<span>{{ currentGrade.grade }}%</span>
			<small>Current grade (%)</small>
		</div>

		<form class="form" @submit.prevent="addgrade">
			<input 
				type="number"
				step="0.1"
				v-model="gradeInput" 
				max="200"
				min="0"/>

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
				<h2>Grade History</h2>
				<ul>
					<li v-for="grade in grades">
						<span>{{ grade.grade }}%</span>
						<small>
							{{ new Date(grade.date).toLocaleDateString() }}
						</small>
					</li>
				</ul>
			</div>

		</div>
    </div>
    </div>
	</main>
    </div>
</template>

<style>
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
.form {
	display: flex;
	margin-bottom: 2rem;
	border: 1px solid #AAA;
	border-radius: 0.5rem;
	overflow: hidden;
	transition: 200ms linear;
}
.form:focus-within,
.form:hover {
	border-color: rgba(0, 217, 177,1);
	border-width: 2px;
}
.form input[type="number"] {
	appearance: none;
	outline: none;
	border: none;
	background-color: white;
	flex: 1 1 0%;
	padding: 1rem 1.5rem;
	font-size: 1.25rem;
}
.form input[type="submit"] {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: rgba(0, 217, 177,1);
	padding: 0.5rem 1rem;
	color: white;
	font-size: 1.25rem;
	font-grade: 700;
	transition: 200ms linear;
	border-left: 3px solid transparent;
}
.form input[type="submit"]:hover {
	background-color: white;
	color: rgba(0, 217, 177,1);
	border-left-color: rgba(0, 217, 177,1);
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