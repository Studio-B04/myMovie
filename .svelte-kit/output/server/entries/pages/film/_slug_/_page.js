import { a as GetMovieByID } from "../../../../chunks/api.js";
async function load({ params }) {
  return await GetMovieByID(params.slug);
}
export {
  load
};
