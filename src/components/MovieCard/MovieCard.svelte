<script>
  import Image from "@components/Image/Image.svelte";
  import Stars from "@components/Stars/Stars.svelte";

  export let id = undefined;
  export let title = undefined;
  export let image = undefined;
  export let description = undefined;
  export let date = undefined;
  export let score = undefined;
</script>

<article {id}>
  <Image src={image} alt="Affiche du film {title}"/>

  <div>
    <h3>{title} <small>({new Date(date).getFullYear()})</small></h3>

    {#if score}
      <div class="score">
        <Stars score={score/2}/> <small>({score}/10)</small>
      </div>
    {/if}

    <p>{description}</p>
  </div>
</article>


<style lang="scss">
  @import './MovieCard.scss';
</style>