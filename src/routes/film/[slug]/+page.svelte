<script>
  import { onMount } from 'svelte';
  import Image from '@components/Image/Image.svelte';
  import Pill from '@components/Pill/Pill.svelte';
  import Grid from '@components/Grid/Grid.svelte';
  import Stars from '@components/Stars/Stars.svelte';
  import Title from '@components/Title/Title.svelte';
  import Reviews from '@components/Reviews/Reviews.svelte';
  import Credits from '@components/Credits/Credits.svelte';
  import Similar from '@components/Similar/Similar.svelte';
  import Photos from '@components/Photos/Photos.svelte';
  import Videos from '@components/Videos/Videos.svelte';
  import { formatDate } from '$lib/date.js';

  export let data = {};
  let mounted = false

  onMount(() => mounted = true)
</script>

<div class="movie" id={data.id}>
  <header class="movie__header">
    <div class="movie__header__image">
      <Image src={data.poster_path} alt="affiche du film {data.title}" width={400}/>
    </div>

    <div class="movie__header__details">
      <!-- TITLE -->
      <svelte:element this={data.homepage ? "a" : "div"} class="movie__header__details__title" href={data.homepage || undefined} target={data.homepage ? "_blank" : undefined}>
        <Title level={2} size="xxl">
          {data.title} 
          {#if data.title !== data.original_title}
            <small>({data.original_title})</small>
          {/if}

          {#if data.tagline}
            <em>“{data.tagline}”</em>
          {/if}
        </Title>
      </svelte:element>

      <!-- COUNTRY -->
      {#if data.production_countries}
        <div class="movie__header__details__countries">
          {#each data.production_countries as {iso_3166_1, name} (iso_3166_1)}
          <img src="https://flagsapi.com/{iso_3166_1.toUpperCase()}/shiny/64.png" alt={name}/>
          {/each}
        </div>
      {/if}

      <!-- REVIEWS -->
      {#if data.vote_average && data.vote_count}
        <a class="movie__header__details__reviews" href="#reviews">
          <Stars score={data.vote_average/2}/> {Math.round(data.vote_average*100)/100}/10 <small>({data.vote_count} avis.)</small>
        </a>
      {/if}

      <!-- RELEASE -->
      {#if data.release_date}
        <div class="movie__header__details__remease">
          <strong>Date de sortie :</strong> {formatDate(data.release_date, 'D dd MM yyyy.')}
        </div>
      {/if}

      <!-- PRODUCTION -->
      {#if data.production_companies}
        <strong>Production :</strong>
        <ul class="movie__header__details__production">
          {#each data.production_companies as {id, name, origin_country} (id)}
            <li {id}>{name} 
              {#if origin_country}
                <small>({origin_country})</small>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}

      <!-- OVERVIEW -->
      {#if data.overview}
        <p class="movie__header__details__overview">
          {data.overview}
        </p>
      {/if}

      <!-- GENRES -->
      {#if data.genres}
        <div class="movie__header__details__genres">
          {#each data.genres as genre}
            <Pill label={genre.name}/>
          {/each}
        </div>
      {/if}
    </div>
  </header>


  {#if mounted}

  <section class="movie__section" id="photos">
    <Title level={3} size="xl">Les photos</Title>
    <Photos movieID={data.id} max={12} filter="backdrops" />
  </section>

  <section class="movie__section" id="affiches">
    <Title level={3} size="xl">Les vidéos</Title>
    <Videos movieID={data.id} max={2} filter="youtube" />
  </section>

  <section class="movie__section" id="affiches">
    <Title level={3} size="xl">Les affiches du film</Title>
    <Photos movieID={data.id} max={3} filter="posters" />
  </section>

  <section class="movie__section" id="similar">
    <Title level={3} size="xl">Le casting</Title>
    <Credits movieID={data.id} filter="cast" />
  </section>

  <section class="movie__section" id="similar">
    <Title level={3} size="xl">L'équipe technique</Title>
    <Credits movieID={data.id} filter="crew" />
  </section>

  <section class="movie__section" id="reviews">
    <Title level={3} size="xl">Les derniers avis</Title>
    <Reviews movieID={data.id} />
  </section>

  <section class="movie__section" id="similar">
    <Title level={3} size="xl">Les films dans le même genre</Title>
    <Similar movieID={data.id} />
  </section>
  {/if}

</div>


<style lang="scss" global>
  @import './+page.scss';
</style>
