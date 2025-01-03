<script>
  export let src = undefined;
  export let width = 500;
  export let ratio = 1/1.5;
  export let alt = '';

  const size = width > 600 ? 'original' : "w500";

  $: calculatedSrc = !src || src === "" || src === null 
    ? `https://placehold.co/${width}x${Math.round(width * 1/ratio)}?text=Image+Manquante`
    : `https://image.tmdb.org/t/p/${size}${src}`;
</script>

<img 
  src={calculatedSrc}
  {alt}
  style:width|important={width + 'px'}
  style:aspect-ratio|important={ratio}
>


<style>
  img {
    max-width: 100%;
    display: block;
    object-fit: contain;
    object-position: top center;
  }
</style>


