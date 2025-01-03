<script>
  import { GetReviewsByMovieId } from "$lib/api";
  import { formatDate } from "$lib/date";
  import Image from "@components/Image/Image.svelte";
  import Stars from "@components/Stars/Stars.svelte";
  import Title from "@components/Title/Title.svelte";

  export let movieID = undefined
</script>

{#await GetReviewsByMovieId(movieID) then data}
  {#if data?.results?.length}
    <ul class="reviews">
      {#each data?.results as {author_details, content, created_at, id, url}}
        <li class="reviews__item">
          <div class="reviews__item__user">
            <Image src={author_details?.avatar_path} width={80} ratio={1}/>

            <div>
              <Title size="sm" level={3}>{author_details.username}</Title>
              <span><Stars score={author_details.rating/2} /> {author_details.rating} / 10</span>
              <em>le {formatDate(created_at, 'D dd mm yyyy')}.</em>
            </div>

            {@html content}
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    Aucun avis pour le moment.
  {/if}
{:catch}
  Une erreur est survenue pendant la récupération des avis
{/await}

<style lang="scss">
  @import './Reviews.scss';
</style>