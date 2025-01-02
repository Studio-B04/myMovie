<script>
  import Stars from "@components/Stars/Stars.svelte";

  export let id = undefined;
  export let title = undefined;
  export let image = undefined;
  export let description = undefined;
  export let date = undefined;
  export let language = undefined;
  export let score = undefined;

  $: imgSrc = !image || image === "" 
    ? "https://placehold.co/500x750?text=Image+Manquante" 
    : `https://image.tmdb.org/t/p/w500${image}`;
</script>

<article {id}>
  <img src={imgSrc} alt="affiche du film {title}">

  <div>
    <h3>{title}</h3>
    <ul>
      {#if date}<li>{new Date(date).getFullYear()}</li>{/if}
      {#if language}<li>{language.toUpperCase()}</li>{/if}
      {#if score}<li><Stars score={score/2}/> <small>({score}/10)</small></li>{/if}
    </ul>
    <p>{description}</p>
  </div>
</article>


<style>
  article {
    height: 100%;
    border: 1px solid grey;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 10px -10px rgba(0,0,0,0.75);

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1/1.5;
      object-fit: contain;
      object-position: center top;
    }

    div {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h3 {
        color: darkslategrey;
      }

      ul {
        display: flex;
        align-items: baseline;
        line-height: 1;
        gap: 0.5rem;

        li {
          display: flex;
          align-items: baseline;
          gap: 1ch;
        }

        li:not(:first-child)::before {
          content: '|';
        }
      }
    }
  }
</style>