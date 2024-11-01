import axios from "axios";
import "./style.css";
import { IWeather } from "./models/IWeather";

// 1. Hitta knappen -> Lägg till händelsen click
document.getElementById("getWeather")?.addEventListener("click", () => {
  // 2. Anropa geolocation för att få positionen
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // position är objektet som vi får om positionen hittas
      console.log(position);
      getWeather(position.coords.longitude, position.coords.latitude);
    },
    () => {}
  );
});

// 3. Funktion för att göra api-anrop
// Denna funktion behöver lng och lat
const getWeather = async (lng: number, lat: number) => {
  // <IWeather> beskriver resultatet av vårt anrop med hjälp av ett interface
  const result = await axios.get<IWeather>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f33373090626c93c497865cb41e75619&units=metric`
  );

  // 4. Kontrollera datat från api:t
  console.log(result.data);

  // 5. Presentera datat
  const container = document.getElementById("weather");

  const name = document.createElement("h2");
  const pTag = document.createElement("p");
  const temp = document.createElement("span");

  name.innerHTML = result.data.weather[0].main;
  pTag.innerHTML = result.data.weather[0].description;
  temp.innerHTML = result.data.main.temp.toString() + " C";

  container?.appendChild(name);
  container?.appendChild(pTag);
  container?.appendChild(temp);
};
