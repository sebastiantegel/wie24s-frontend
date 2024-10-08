import { Movie } from "./models/Movie";
import "./style.css";

let lotr: Movie = new Movie("1", "LOTR", "some link to an image", 2001);
let sw: Movie = new Movie("2", "Star Wars", "some link to an image", 1978);
let hp: Movie = new Movie("3", "HP", "some link to an image", 1998);
const app: HTMLElement | null = document.getElementById("app");

const makeMovies = () => {
  const movies: Movie[] = [lotr, sw, hp];

  for (let i: number = 0; i < movies.length; i++) {
    // Skapa HTML
    const container: HTMLDivElement = document.createElement("div");
    const title: HTMLHeadingElement = document.createElement("h2");
    const image: HTMLImageElement = document.createElement("img");
    const year: HTMLSpanElement = document.createElement("span");

    // Ändra HTML
    title.innerHTML = movies[i].title;
    image.src = movies[i].imageUrl;
    image.alt = movies[i].title;
    year.innerHTML = movies[i].year.toString();

    // Placera HTML
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(year);

    if (app) {
      app.appendChild(container);
    }
  }
};

makeMovies();

const x: number = 2;

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Heeej");
    if (x > 0) {
      resolve(lotr);
    } else {
      reject("");
    }
  }, 3000);
}).then(
  (aMovie) => {
    console.log("Resolved - Det gick bra", aMovie);
  },
  () => {
    console.log("Rejected - Det gick dåligt");
  }
);

fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => response.json())
  .then((result) => {
    console.log(result.Search);

    for (let i: number = 0; i < result.Search.length; i++) {
      // Skapa HTML
      const container: HTMLDivElement = document.createElement("div");
      const title: HTMLHeadingElement = document.createElement("h2");
      const image: HTMLImageElement = document.createElement("img");
      const year: HTMLSpanElement = document.createElement("span");

      // Ändra HTML
      title.innerHTML = result.Search[i].Title;
      image.src = result.Search[i].Poster;
      image.alt = result.Search[i].Title;
      year.innerHTML = result.Search[i].Year;

      // Placera HTML
      container.appendChild(title);
      container.appendChild(image);
      container.appendChild(year);

      if (app) {
        app.appendChild(container);
      }
    }
  });
