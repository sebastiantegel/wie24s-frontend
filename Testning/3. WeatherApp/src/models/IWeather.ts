export interface IWeather {
  name: string;
  weather: IWeatherDetails[];
  main: IMain;
}

interface IWeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
}
