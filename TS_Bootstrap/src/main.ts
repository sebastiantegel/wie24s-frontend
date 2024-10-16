import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import "./style.scss";

function createHtml(movies: IMovie[]) {
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieContainer = document.createElement("article");
    const title = document.createElement("h2");
    const poster = document.createElement("img");

    title.innerHTML = movie.Title;
    poster.src = movie.Poster;
    poster.alt = movie.Title;

    movieContainer.appendChild(title);
    movieContainer.appendChild(poster);

    if (moviesContainer) {
      moviesContainer.appendChild(movieContainer);
    }
  }
}

document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("searchText") as HTMLInputElement;

  fetch(`https://omdbapi.com/?apikey=416ed51a&s=${input.value}`)
    .then((response) => response.json())
    .then((result: IOmdbResponse) => {
      localStorage.setItem("movies", JSON.stringify(result.Search));

      input.value = "";
      createHtml(result.Search);
    });
});

const movies: IMovie[] = JSON.parse(localStorage.getItem("movies") || "[]");
createHtml(movies);
