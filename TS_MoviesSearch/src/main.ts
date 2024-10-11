import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const textbox = document.getElementById("searchText") as HTMLInputElement;

  fetch(`https://omdbapi.com/?apikey=416ed51a&s=${textbox.value}`)
    .then((response) => response.json())
    .then((result: IOmdbResponse) => {
      createHtml(result.Search);

      textbox.value = "";
    });
});

const createHtml = (movies: IMovie[]) => {
  const moviesContainer: HTMLElement | null = document.getElementById("movies");
  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");
    const heading = document.createElement("h2");
    const poster = document.createElement("img");

    heading.innerHTML = movies[i].Title;
    poster.src = movies[i].Poster;
    poster.alt = movies[i].Title;

    movieContainer.appendChild(heading);
    movieContainer.appendChild(poster);

    if (moviesContainer) {
      moviesContainer.appendChild(movieContainer);
    }
  }
};
