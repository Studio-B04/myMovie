<script>
  import { GetLatestMovies } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  import MovieCard from "@components/MovieCard/MovieCard.svelte";

  export let max = 5;
</script>

<div class="similar">
  {#await GetLatestMovies(max) then data}
    {#if data?.results?.length}
      <Grid width="220px">
        {#each data?.results as {id, original_title, overview, poster_path, release_date, original_language, vote_average} (id)}
          <li>
            <a href="/film/{id}" >
              <MovieCard 
                {id} 
                title={original_title} 
                image={poster_path} 
                description={overview} 
                date={release_date} 
                language={original_language}
                score={vote_average}
              />
            </a>
          </li>  
        {/each}
      </Grid>
    {:else}
      Il n'y a aucun film tendance en ce moment
    {/if}
  {:catch}
    Une erreur est survenue pendant la récupération des films tendances
  {/await}
</div>


<style>
  .similar {
    a {
      text-decoration: none;
      color: inherit;
    }
  }
</style>