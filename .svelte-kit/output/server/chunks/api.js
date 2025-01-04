const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDAxYjczMzhkMzk4ODY1MjA1MTY3YTg1N2I3YjY3NyIsIm5iZiI6MTczNTY2OTE1My42MjEsInN1YiI6IjY3NzQzNWExZDhkYzIyZTZjNjkyYWQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.06kq9UJUU_Hod0qYijz4C2rYBBkFS93vIqDYXoiJXnY";
const BASE = "https://api.themoviedb.org/3/";
const headers = {
  Authorization: `Bearer ${API_KEY}`,
  accept: "application/json"
};
const SearchMovie = (query, page) => new Promise((resolve, reject) => {
  const url = new URL("search/movie", BASE);
  const params = new URLSearchParams(url.search);
  params.append("language", "fr-FR");
  params.append("query", query);
  params.append("page", +page);
  url.search = params.toString();
  fetch(url, { method: "GET", headers }).then((data) => resolve(data.json())).catch((error) => reject(error));
});
const GetMovieByID = (id) => new Promise((resolve, reject) => {
  const url = new URL(`movie/${id}`, BASE);
  const params = new URLSearchParams(url.search);
  params.append("language", "fr-FR");
  url.search = params.toString();
  fetch(url, { method: "GET", headers }).then((data) => resolve(data.json())).catch((error) => reject(error));
});
const GetLatestMovies = (max = 3) => new Promise((resolve, reject) => {
  const url = new URL(`trending/movie/week`, BASE);
  const params = new URLSearchParams(url.search);
  params.append("language", "fr-FR");
  url.search = params.toString();
  fetch(url, { method: "GET", headers }).then((data) => data.json()).then(
    (data) => resolve({ ...data, results: data?.results.slice(0, max) })
  ).catch((error) => reject(error));
});
export {
  GetLatestMovies as G,
  SearchMovie as S,
  GetMovieByID as a
};
