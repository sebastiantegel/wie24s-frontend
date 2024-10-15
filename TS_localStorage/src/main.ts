import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import "./style.css";

//#region localStorage
localStorage.setItem("name", "Sebastian");

const myName = localStorage.getItem("name");

if (myName) {
  console.log(myName);
}

const meAndMyself = [{ name: "Sebastian", age: 45, isMarried: true }];

// [{...}] -> string
const theListAsString = JSON.stringify(meAndMyself);

localStorage.setItem("theList", JSON.stringify(meAndMyself));

const myself = localStorage.getItem("theList");
if (myself) {
  // string -> [{ ... }]
  const personList: [] = JSON.parse(myself);

  for (let i = 0; i < personList.length; i++) {
    console.log(personList[i]);
  }
}
//#endregion

const createHtml = (movies: IMovie[]) => {
  const moviesContainer = document.getElementById("movies");
  if (moviesContainer) {
    moviesContainer.innerHTML = "";
  }

  for (let i = 0; i < movies.length; i++) {
    const movieContainer = document.createElement("div");
    const title = document.createElement("h2");
    const poster = document.createElement("img");

    title.innerHTML = movies[i].Title;
    poster.src = movies[i].Poster;
    poster.alt = movies[i].Title;

    movieContainer.appendChild(title);
    movieContainer.appendChild(poster);

    if (moviesContainer) {
      moviesContainer.appendChild(movieContainer);
    }
  }
};

// ? motsvarar en if, om elementet hittades
document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  // e är händelsen (submit-händelsen) beskrivet som ett javascript-objekt
  console.log(e);

  e.preventDefault();

  const theInputTag = document.getElementById("searchText") as HTMLInputElement;
  const searchText = theInputTag.value;

  fetch("https://omdbapi.com/?apikey=416ed51a&s=" + searchText)
    .then((response) => response.json())
    .then((result: IOmdbResponse) => {
      localStorage.setItem("movies", JSON.stringify(result.Search));

      createHtml(result.Search);

      theInputTag.value = "";
    });
});

const movies: IMovie[] = JSON.parse(localStorage.getItem("movies") || "[]");

createHtml(movies);
