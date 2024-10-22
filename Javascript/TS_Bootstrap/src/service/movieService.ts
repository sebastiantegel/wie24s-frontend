// Hämta, ta bort, skapa och ändra filmer (CRUD - Create, Read, Update, Delete)
// Här kommer vi att skapa funktioner för allting vi behöver
// som har med filmer att göra.

import { IMovieExt } from "../models/IMovieExt";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const searchMovies = async (searchText: string) => {
  const result: IOmdbResponse = await get<IOmdbResponse>(
    `${BASE_URL}s=${searchText}`
  );
  return result.Search;
};

export const getMovieById = async (movieId: string): Promise<IMovieExt> => {
  const result: IMovieExt = await get<IMovieExt>(`${BASE_URL}i=${movieId}`);
  return result;
};
