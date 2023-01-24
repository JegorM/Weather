<template>
    <div class="containers" v-if="cityWeather">
        <tb class="infoweather">

            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/UPA.png" alt="">
                    <p>Місто:</p>
                </div> {{ cityWeather.name }}
            </tr>
            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/drop.svg" alt="">
                    <p>Вологість:</p>
                </div> {{ cityWeather.main.humidity }}
            </tr>
            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/thermometer.svg" alt="">
                    <p>Температура:</p>
                </div> {{ cityWeather.main.temp }}°
            </tr>
            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/wind-speed.svg" alt="">
                    <p>Напрямок вітру:</p>
                </div> {{ cityWeather.wind.deg }}°
            </tr>
            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/tornado.svg" alt="">
                    <p>Тиск:</p>
                </div> {{ cityWeather.main.pressure }}
            </tr>
            <tr class="pop">
                <div class="onePlusTwo">
                    <img class="imgMiniLogo" src="../img/wind.svg" alt="">
                    <p>Швидкість вітру:</p>
                </div> {{ cityWeather.wind.speed }}
            </tr>
        </tb>
    </div>
</template>

<script>
import { getCityWeather } from "../src/weather";
export default {
    props: ["city"],
    data: function () {
        return {
            info: "",
            cityWeather: null,
        };
    },
    mounted() {
        getCityWeather(this.city).then((value) => {
            this.cityWeather = value;
        });
    },
};
// let a = {
//     coord: { lon: 30.5167, lat: 50.4333 },
//     weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
//     base: "stations",
//     main: {
//         temp: -1.82,
//         feels_like: -1.82,
//         temp_min: -1.82,
//         temp_max: -0.22,
//         pressure: 1036,
//         humidity: 91,
//     },
//     visibility: 10000,
//     wind: { speed: 0.45, deg: 53, gust: 0.89 },
//     clouds: { all: 7 },
//     dt: 1674567113,
//     sys: {
//         type: 2,
//         id: 2003742,
//         country: "UA",
//         sunrise: 1674539038,
//         sunset: 1674570931,
//     },
//     timezone: 7200,
//     id: 703448,
//     name: "Kyiv",
//     cod: 200,
// };
</script>

<style src="../style/infoCity.css">

</style>
