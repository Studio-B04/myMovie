<script>
  import Movie from "@components/Movie/Movie.svelte";

  export let items = [];
</script>

{#if items?.length}
  <ul>
    {#each items as {id, original_title, overview, poster_path, release_date, original_language, vote_average} (id)}
      <li>
        <a href="/film/{id}">
          <Movie 
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
  </ul>
{/if}

<style>
  h3 {
    text-align: center;
  }

  ul {
    margin-block-start: 30px;
    width: 100%;
    display: grid;
    justify-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: minmax(200px, auto); 
    gap: 1rem;

    a {
      display: block;
      transition: all 125ms ease;
      color: inherit;
      text-decoration: none;

      &:hover {
        position: relative;
        transform: scale(1.025);
      }
    }

    &:has(a:hover) a:not(:hover) {
      opacity: 0.75;
      filter: grayscale(0.5);
    }
  }
</style>