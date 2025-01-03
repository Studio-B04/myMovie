<script>
  import { GetCreditsByMovieID, GetSimilarByMovieID } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  import Image from "@components/Image/Image.svelte";
  import MovieCard from "@components/MovieCard/MovieCard.svelte";
  import Title from "@components/Title/Title.svelte";

  export let movieID = undefined
  export let filter = undefined
</script>

<div class="credits">
  {#await GetCreditsByMovieID(movieID, filter) then data}
    {#if data?.[filter]?.length}
    <Grid width="150px">
      {#each data?.[filter] as {id, profile_path, name, original_name, gender, character, job, known_for_department}}
        <li>
        <Image src={profile_path} />
          <div>
            <strong>
              {name || original_name || 'Inconnu'} <small>({['', 'F', 'M'][gender || 0]})</small>
            </strong> 

            <strong>{known_for_department}</strong>

            <p>"{character || job}"</p>
          </div>
        </li>
      {/each}
    </Grid>
    {:else}
      Il n'y a aucune information disponible concernant l'équipe du film.
    {/if}
  {:catch}
    Une erreur est survenue pendant la récupération des informations
  {/await}
</div>


<style lang="scss">
  .credits {
    li {
      border-radius: 0.5rem;
      border: 0.1rem solid lightslategray;
      overflow: hidden;
      
      div {
        text-align: center;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1ch;

        :global(h2) {
          margin-block-end: 0 !important;
        }
      }
    }
  }
</style>