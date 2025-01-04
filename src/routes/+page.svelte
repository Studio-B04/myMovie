<script>
  import { SearchMovie } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  import Button from "@components/Button/Button.svelte";
  import Title from "@components/Title/Title.svelte";
  import MovieCard from "@components/MovieCard/MovieCard.svelte";
  import Latest from "@components/Latest/Latest.svelte";

  
  let query = '';
  let data = null;
  let loading = false;
  let error = undefined;

  async function search(page) {
    loading = true;

    data = await SearchMovie(query, page)
      .catch((err) => { 
        error = err;
        data = undefined;
       })
      .finally(() => { 
        loading = false;
      });
  }
</script>


<Title size="xl" level={2} align="center">
  Bienvenue sur le Portail MyMovie
</Title>

<Title size="sm" level={3} align="center">
  Le site de référence du cinéma ! Retrouvez toutes les informations sur vos films préférés.
</Title>


<form>
  <input type="search" bind:value={query} on:keydown={e => e.key === "Enter" && query.length >= 3 && search(1)}>
  <Button action={() => search(1)} disabled={query.length < 3 ? 'disabled' : undefined}>
    Chercher
  </Button>
</form>



<section class="home">

  {#if loading}
    recherche...
  {/if}

  {#if error}
    <Title size="sm" align="center">{error}</Title>
  {/if}

  {#if !error && !loading && data}
    {#if data?.total_results === 0 }
      <Title size="sm" align="center">Aucun film ne correspond à votre recherche...</Title>
    {:else}
    
      {#if data?.total_results === 1}
        <Title size="sm" align="center">1 film trouvé pour "{query}" :</Title>
      {:else}
        <Title size="sm" align="center">{data?.total_results} films trouvés pour "{query}" :</Title>
      {/if}
      
      <Grid width="300px">
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

      {#if data?.page < data?.total_pages}
        <Button disabled={loading} action={() => search(data?.page + 1)}>Voir les films suivants</Button>
      {/if}
    {/if}
  {/if}
</section>


<section class="movie__section" id="latest">
  <Title level={3} size="xl">Les films tendances</Title>
  <Latest max="10"/>
</section>

<style>
  @import './+page.scss';
</style>