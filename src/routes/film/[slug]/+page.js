import { GetMovieByID } from "$lib/api.js";

export async function load({ params }) {
  return await GetMovieByID(params.slug);
}
