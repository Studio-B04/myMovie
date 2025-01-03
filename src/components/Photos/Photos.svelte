<script>
  import { GetImagesByMovieID } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  import Image from "@components/Image/Image.svelte";
  import MovieCard from "@components/MovieCard/MovieCard.svelte";

  export let movieID = undefined;
  export let max = 10;
  export let filter = "backdrops";
</script>

<div class="photos">
  {#await GetImagesByMovieID(movieID, max) then data}
    {#if data}
      <Grid width={filter === "backdrops" ? "400px" : "280px"}>
        {#each data?.[filter] as {id, aspect_ratio, file_path}}
          <li>
            <Image src={file_path} width="500px" ratio={aspect_ratio} />
          </li>  
        {/each}
      </Grid>
    {:else}
      Il n'y a aucune photo pour ce film
    {/if}
  {:catch}
    Une erreur est survenue pendant la récupération des photos
  {/await}
</div>
