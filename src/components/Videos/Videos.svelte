<script>
  import { GetVideosByMovieID } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  import Image from "@components/Image/Image.svelte";
  import MovieCard from "@components/MovieCard/MovieCard.svelte";
  import Title from "@components/Title/Title.svelte";

  export let movieID = undefined;
  export let max = 10;
  export let filter = "youtube";
</script>

<div class="videos">
  {#await GetVideosByMovieID(movieID, max) then data}
    {#if data?.results?.length}
      {#each data.results.filter(({site}) => site.toLowerCase() === filter.toLowerCase()) as {id, key, name, site}}
        <Title level="4" size="md">{name}</Title>
        <iframe 
          width="980px"
          height="552px" 
          allowfullscreen
          frameborder="0"
          title={name} 
          src="https://www.youtube.com/embed/{key}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" 
        >
        </iframe>
      {/each}
    {:else}
      Il n'y a aucune vidéo pour ce film
    {/if}
  {:catch}
    Une erreur est survenue pendant la récupération des vidéos
  {/await}
</div>

<style>
  .videos {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 980px;
    margin-inline: auto;
  }
</style>
