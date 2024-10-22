import { IMovie } from "./models/IMovie";
import { getMovieById, searchMovies } from "./service/movieService";
import "./style.scss";

async function getMovie(imdbID: string) {
  const movie = await getMovieById(imdbID);

  const modalTitle = document.getElementById("staticBackdropLabel");
  if (modalTitle) {
    modalTitle.innerHTML = movie.Title;
  }

  const modalBody = document.getElementById("modalBody");
  if (modalBody) {
    modalBody.innerHTML = "";

    const poster = document.createElement("img");
    const actors = document.createElement("p");
    const plot = document.createElement("p");
    const writer = document.createElement("em");

    poster.src = movie.Poster;
    poster.alt = movie.Title;
    actors.innerHTML = movie.Actors;
    plot.innerHTML = movie.Plot;
    writer.innerHTML = movie.Writer;

    modalBody.appendChild(poster);
    modalBody.appendChild(plot);
    modalBody.appendChild(actors);
    modalBody.appendChild(writer);
  }
}

function createHtml(movies: IMovie[]) {
  const moviesContainer = document.getElementById("movies");

  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    // Create
    const movieContainer = document.createElement("article");
    const title = document.createElement("h2");
    const poster = document.createElement("img");

    // Assign values
    movieContainer.addEventListener("click", () => {
      getMovie(movie.imdbID);
    });
    movieContainer.setAttribute("data-bs-toggle", "modal");
    movieContainer.setAttribute("data-bs-target", "#staticBackdrop");

    title.innerHTML = movie.Title;
    poster.src = movie.Poster;
    poster.alt = movie.Title;

    // Place
    movieContainer.appendChild(title);
    movieContainer.appendChild(poster);

    if (moviesContainer) {
      moviesContainer.appendChild(movieContainer);
    }
  }
}

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("searchText") as HTMLInputElement;

  const movies = await searchMovies(input.value);
  localStorage.setItem("movies", JSON.stringify(movies));

  input.value = "";
  createHtml(movies);
});

const movies: IMovie[] = JSON.parse(localStorage.getItem("movies") || "[]");
createHtml(movies);
