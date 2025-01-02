import { GetFilmByID } from "$lib/api.js";

export async function load(route) {
  return await GetFilmByID(route.params.slug);
}
