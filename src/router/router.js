import WeatherCould from "../components/WeatherCould.vue";
import CitieWeather from "../components/CitieWeather.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: WeatherCould,
  },
  {
    path: "/city-info/:city",
    component: CitieWeather,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
