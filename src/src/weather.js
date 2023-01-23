import axios from "axios";

export function getCityWeather(name) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7914d5a440960cfd5df3bd0388a7ad0f&lang=en&units=metric`
    )
    .then((response) => response.data);
}
