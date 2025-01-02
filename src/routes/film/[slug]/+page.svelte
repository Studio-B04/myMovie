<script>
  import { onMount } from 'svelte';
  import Pill from '@components/Pill/Pill.svelte';
  import Grid from '@components/Grid/Grid.svelte';
  import Stars from '@components/Stars/Stars.svelte';
  import { GetCreditsByFilmID, GetSimilarID } from '$lib/api.js';

  export let data = {};
  let mounted = false
  
  const {
    id,
    title,
    backdrop_path,
    poster_path,
    production_countries,
    original_title,
    tagline,
    budget, 
    overview,
    production_companies,
    genres,
    popularity,
    vote_count
  } = data 

  $: poster = !poster_path || poster_path === "" 
    ? "https://placehold.co/500x750?text=Image+Manquante" 
    : `https://image.tmdb.org/t/p/w500${poster_path}`;

  onMount(() => mounted = true)
  
</script>

<header>
  <img src={poster} alt="affiche du film {title}">
  <div>
    <h1>
      {title}
      {#if title !== original_title}
        <small>({original_title})</small>
      {/if}
    </h1>
    
    <div class="stars">
      <Stars score={popularity/20}/>
    </div>
    
    <blockquote>"{tagline}"</blockquote>

    <div class="meta">

      <div class="countries">
        {#each production_countries as country}
          <div class="country">
            <img src="https://flagsapi.com/{country.iso_3166_1}/flat/64.png" alt="">
            <span>{country.name}</span>
          </div>
        {/each}
      </div>

      <div class="companies">
        {#each production_companies as {name, logo_path}}
          <div class="company">
            <img src="https://image.tmdb.org/t/p/w500{logo_path}" alt="">
            <span>{name}</span>
          </div>
        {/each}
      </div>

      Budget: {budget} $
    </div>
  </div>
</header>


<div class="genres">
  {#each genres as {name}}
    <Pill label={name} />
  {/each}
</div>

<p>{overview}</p>


{#if mounted}

  <hr>

  <h3>Casting :</h3>
  {#await GetCreditsByFilmID(id)}
    Chargement ...
  {:then {cast}}
    {#if cast}
      <ul class="team">
    {console.log(cast)}

        {#each cast as { id, character, name, profile_path }}
          {@const src = !profile_path || profile_path === "" 
            ? "https://placehold.co/200x300?text=Image+Manquante" 
            : `https://image.tmdb.org/t/p/w500${profile_path}`
          }
           <li {id}>
            <img {src} alt="">
            <div>{name}, <small><strong>"{character}"</strong></small></div>
           </li>
        {/each}
      </ul>
    {:else}
      <strong>information non disponible.</strong>
    {/if}
  {/await}

  <hr>

  <h3>Équipe technique :</h3>
  {#await GetCreditsByFilmID(id)}
    Chargement ...
  {:then {crew}}
    {#if crew}
      <ul class="team">
        {#each crew as { id, job, name, profile_path }}
        {@const src = !profile_path || profile_path === "" 
          ? "https://placehold.co/200x300?text=Image+Manquante" 
          : `https://image.tmdb.org/t/p/w500${profile_path}`
        }
          <li {id}>
            <img {src} alt="">
            <div>{name}, <small><strong>"{job}"</strong></small></div>
          </li>
        {/each}
      </ul>
    {:else}
      <strong>information non disponible.</strong>
    {/if}
  {/await}

  <hr>

  <h3>Films similaires :</h3>
  {#await GetSimilarID(id)}
    Chargement ...
  {:then data}
    {#if data?.results.length}
      <Grid items={data.results} />
    {:else}
      <strong>Il n'y a aucun film simillaire à celui ci.</strong>
    {/if}
  {/await}
{/if}

<style>
  header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 30px;
    width: 100%;
    z-index: 1;
    padding: 40px;
    
    img {
      width: 100% ;
      max-width: 250px;
    }
    
    h1 {
      font-size: 44px;

      small {
        margin-block: 16px;
        font-size: 22px;
        display: block;
      }
    }

    .stars{
      font-size: 42px;
      margin-bottom: 16px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      .companies {
        display: flex;
        flex-direction: column;

        .company {
          display: flex;
          gap: 1em;
          align-items: center;

          img {
            width: 2.4rem;
            height: auto;
          }
        }
      }
      

      .countries {
        display: flex;

        .country {
          display: flex;
          gap: 1em;
          align-items: center;

          &:not(:last-of-type)::after {
            content: ','
          }
        }

        img {
          height: 2.4rem;
          width: auto;
        }
      }
    }

    blockquote {
      font-size: 20px;
      font-style: italic;
    }
  }

  .genres {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  p {
    margin-block: 30px;
  }

  h3 {
    font-size: 38px;
    margin-block: 20px;
  }
  hr {
    margin-block: 4rem ;
  }

  .team {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(1fr, auto); 
    gap: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 16px;

      img {
        height: 8rem;
        width: auto;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 1ch;
      }
    }
  }

  @media screen and (min-width: 680px) {
    header {
      flex-direction: row;
      gap: 30px;
    }
  }
</style>
