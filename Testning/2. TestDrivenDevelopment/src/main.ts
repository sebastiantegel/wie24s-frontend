import "./style.css";

interface IMovie {
  Title: string;
  Poster: string;
}

interface IOmdbResponse {
  Search: IMovie[];
  Response: string;
  Error: string;
}

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searchText = (document.getElementById("searchText") as HTMLInputElement)
    .value;

  const moviesContainer = document.getElementById("movies");

  if (searchText.length > 2) {
    const response = await fetch(
      "https://omdbapi.com/?apikey=416ed51a&s=" + searchText
    );
    const result: IOmdbResponse = await response.json();

    if (moviesContainer) {
      moviesContainer.innerHTML = "";
    }

    if (result.Response === "True") {
      for (let i = 0; i < result.Search.length; i++) {
        const movieContainer = document.createElement("div");
        const title = document.createElement("h2");
        const poster = document.createElement("img");

        movieContainer.className = "movie";
        title.innerHTML = result.Search[i].Title;
        poster.src = result.Search[i].Poster;
        poster.alt = result.Search[i].Title;

        movieContainer.appendChild(title);
        movieContainer.appendChild(poster);

        moviesContainer?.appendChild(movieContainer);
      }
    } else {
      if (moviesContainer) {
        moviesContainer.innerHTML = result.Error;
      }
    }
  } else {
    if (moviesContainer) {
      moviesContainer.innerHTML =
        "Du måste skriva minst tre tecken för att kunna söka";
    }
  }
});
