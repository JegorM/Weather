<template>
    <div class="container">
        <div class="wrap">
            <div class="contForm">
                <h1 class="titel">Додавання міста</h1>
                <p class="stadt">Введіть назву міста</p>
                <div class="searchAndAdd">
                    <input class="searchStadt" type="search" placeholder="Search Stadt" v-model="inputValueAdd">
                    <button class="addStadt" @click="onAddButtonClick()">Додати</button>
                </div>
            </div>
            {{ cities }}
            <div class="contForm">
                <h1 class="titel">Пошук міста</h1>
                <p class="stadt">Оберіть місто</p>
                <div class="searchAndAdd">
                    <select class="searchStadt" v-model="searchValue">
                        <option :value="city" v-for="city in cities" :key="city">{{ city }}</option>
                    </select>
                    <div :value="city" v-for="city in cities" :key="city">
                        <router-link :to="'/city-info/' + city">
                            <button class="addStadt" @click="onWeatherButtonClick()">Погода</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCityWeather } from '../src/weather'
export default {
    data() {
        return {
            cities: [],
            inputValueAdd: '',
            searchValue: '',
            weather: {},
        }
    },
    methods: {
        onWeatherButtonClick() {
            console.log(this.searchValue)
            if (this.searchValue === '') return
            getCityWeather(this.searchValue).then(value => {
                this.weather = value;
            })


        },
        onAddButtonClick() {
            if (this.inputValueAdd != '') {
                this.cities.push(this.inputValueAdd)
                this.inputValueAdd = ''
            }
        },
    }
}
</script>

<style src="../style/weather.css">

</style>