// Används av alla andra tjänster (services) i vår applikation

// T = IOmdbResponse (searchMovie)
// T = IMovieExt (getMovieById)
export const get = async <T>(url: string) => {
  const response = await fetch(url);
  const result: T = await response.json();
  return result;
};
