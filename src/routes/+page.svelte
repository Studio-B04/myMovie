<script>
  import { SearchMovie } from "$lib/api";
  import Grid from "@components/Grid/Grid.svelte";
  
  let query = '';
  let data = null;
  let loading = false;
  let error = undefined;

  $: results = data?.results || [];
  $: page = data?.page || 1;
  $: total_pages = data?.total_pages || 1;
  $: total_results = data?.total_results || 0;

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

  console.log(data);
  
</script>

<h2>
  Bienvenue sur le Portail MyMovie
</h2>

<section>
  <strong>Retrouvez toutes les informations sur le Cinéma.</strong>

  <div>
    <input type="search" bind:value={query} on:keydown={e => e.key === "Enter" && query.length >= 3 && search(1)}>
    <button on:click={() => search(1)} disabled={query.length < 3 ? 'disabled' : undefined}>Chercher</button>
  </div>

  {#if loading}
    recherche...
  {/if}

  {#if error}
    <h3>Une erreur s'est produite : </h3>
    <p>{error} </p>
  {/if}

  {#if !error && !loading && data}
    {#if total_results === 0 }
      <h3>Aucun film ne correspond à votre recherche...</h3>
      {:else}
      
      {#if total_results === 1}
        <h3>1 film correspond à votre recherche :</h3>
        {:else}
        <h3>{total_results} films correspondent à votre recherche :</h3>
      {/if}
      
      <Grid items={results} />

      {#if page < total_pages}
        <button class="pagination" disabled={loading} on:click={() => search(page + 1)}>
          Voir les films suivants
        </button>
      {/if}
    {/if}
  {/if}
</section>


<style>
  h2 {
    margin-block-end: 30px;
  }

  h3 {
    margin-block: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    div {
      border: 2px solid currentColor;
      display: flex;

      input, button {
        font-size: 20px;
        padding: 0.5em;
        line-height: 1;
        border: none;
      }

      input:focus-visible {
        outline: none;
        background-color: lightcyan;
      }

      button {
        background-color: #ccc;
        border-inline-start: 2px solid currentColor;
       
        &[disabled] {
          opacity: 1;
          color: inherit;
          background-color: #eee;
          cursor: not-allowed;
        }
      }
    }

    .pagination {
      margin-block-start: 20px;
      appearance: none;
      padding: 0.75em 1.5em;
      font-size: 1.15em;
      color: white;
      background-color: darkslategrey;
      border: none;
    }
  }
</style>