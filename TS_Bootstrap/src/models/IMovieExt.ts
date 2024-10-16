import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
  Genre: string;
  Writer: string;
  Plot: string;
  Actors: string;
}
