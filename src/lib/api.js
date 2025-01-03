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
export const GetMovieByID = (id) =>
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
 * GET ALL REVIEWS FROM A MOVIE BY ITS ID
 * @param {number} id
 * @returns {Object}
 */
export const GetReviewsByMovieId = (id) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/reviews`, BASE);

    fetch(url, { method: "GET", headers })
      .then((data) => resolve(data.json()))
      .catch((error) => reject(error));
  });

/**
 * GET ALL CREDITS FROM A MOVIE BY ITS ID
 * @param {number} id
 * @returns {Object}
 */
export const GetCreditsByMovieID = (id) =>
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
 * GET X SIMILAR MOVIES FROM A MOVIE BY ITS ID
 * @param {number} id
 * @param {number} max
 * @returns {Object}
 */
export const GetSimilarByMovieID = (id, max = 3) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/recommendations`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => data.json())
      .then((data) =>
        resolve({ ...data, results: data?.results.slice(0, max) })
      )
      .catch((error) => reject(error));
  });

/**
 * GET X LATEST MOVIES
 * @param {number} max
 * @returns {Object}
 */
export const GetLatestMovies = (max = 3) =>
  new Promise((resolve, reject) => {
    const url = new URL(`trending/movie/week`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => data.json())
      .then((data) =>
        resolve({ ...data, results: data?.results.slice(0, max) })
      )
      .catch((error) => reject(error));
  });

/**
 * GET IMAGES FROM MOVIE BY ID
 * @param {number} id
 * @param {number} max
 * @returns {Object}
 */
export const GetImagesByMovieID = (id, max = 10) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/images`, BASE);

    fetch(url, { method: "GET", headers })
      .then((data) => data.json())
      .then((data) =>
        resolve({
          ...data,
          backdrops: data?.backdrops.slice(0, max),
          posters: data?.posters.slice(0, max),
          logos: data?.logos.slice(0, max),
        })
      )
      .catch((error) => reject(error));
  });

/**
 * GET IMAGES FROM MOVIE BY ID
 * @param {number} id
 * @param {number} max
 * @returns {Object}
 */
export const GetVideosByMovieID = (id, max = 3) =>
  new Promise((resolve, reject) => {
    const url = new URL(`movie/${id}/videos`, BASE);

    const params = new URLSearchParams(url.search);
    params.append("language", "fr-FR");
    url.search = params.toString();

    fetch(url, { method: "GET", headers })
      .then((data) => data.json())
      .then((data) =>
        resolve({
          ...data,
          results: data?.results.slice(0, max),
        })
      )
      .catch((error) => reject(error));
  });
