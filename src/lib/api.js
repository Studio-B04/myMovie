const API_KEY = import.meta.env.VITE_API_KEY;

const BASE = "https://api.themoviedb.org/3/";

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  accept: "application/json",
};

/**
 * SEARCH FOR A MOVIE BY TITLE
 * @param {string} query Title to search
 * @param {number} page Index of page in paginated results
 * @returns {Object}
 */
export const SearchMovie = (query, page) =>
  new Promise((resolve, reject) => {
    const url = new URL("search/movie", BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    params.append("query", query);
    params.append("include_adult", true);
    params.append("page", +page);
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => resolve(data.json()))
      .catch((error) => reject(error));
  });

/**
 * GET ALL INFORMATION FROM A MOVIE BY ITS ID
 * @param {number} id
 * @returns {Object}
 */
export const GetFilmByID = (id) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => resolve(data.json()))
      .catch((error) => reject(error));
  });

/**
 * GET ALL CREDITS FROM A MOVIE BY ITS ID
 * @param {number} id
 * @returns {Object}
 */
export const GetCreditsByFilmID = (id) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/credits`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => resolve(data.json()))
      .catch((error) => reject(error));
  });

/**
 * GET SIMILAR MOVIES FROM A MOVIE BY ITS ID
 * @param {number} id
 * @returns {Object}
 */
export const GetSimilarID = (id) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/similar`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => data.json())
      .then((data) => resolve({ ...data, results: data?.results.slice(0, 3) }))
      .catch((error) => reject(error));
  });
