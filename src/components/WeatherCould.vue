<template>
	<div class="container">
		<div class="wrap">
			<div class="contForm">
				<h1 class="titel">Додавання міста</h1>
				<p class="stadt">Введіть назву міста</p>
				<div class="searchAndAdd">
					<input class="searchStadt" type="search" placeholder="Search Stadt" v-model="inputValueAdd" />
					<button class="addStadt" @click="onAddButtonClick()">Додати</button>
				</div>
			</div>
			<div class="contForm">
				<h1 class="titel">Пошук міста</h1>
				<p class="stadt">Оберіть місто</p>
				<div class="searchAndAdd">
					<select class="searchStadt" v-model="searchValue">
						<option :value="city" v-for="city in cities" :key="city">
							{{ city }}
						</option>
					</select>
					<button class="addStadt" @click="onWeatherButtonClick()">Погода</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cities: [],
			inputValueAdd: "",
			searchValue: "",
			weather: {},
		};
	},
	methods: {
		onWeatherButtonClick() {
			if (this.searchValue === '') return

			this.$router.push(`/city-info/${this.searchValue}`)
		},
		onAddButtonClick() {
			if (this.inputValueAdd != "") {
				this.cities.push(this.inputValueAdd);
				this.inputValueAdd = "";
				this.saveCities();
			}
		},
		saveCities() {
			const parsed = JSON.stringify(this.cities);
			localStorage.setItem('cities', parsed);
		}
	},
	mounted() {
		if (localStorage.getItem('cities')) {
			try {
				this.cities = JSON.parse(localStorage.getItem('cities'));
			} catch (e) {
				localStorage.removeItem('cities');
			}
		}
	},

};
</script>

<style src="../style/weather.css">

</style>
