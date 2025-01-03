<script>
  export let width = '300px';
  export let height = '200px';
</script>

<ul style="--grid-width: {width}; --grid-height: {height};">
  <slot />
</ul>

<style>
  ul {
    margin-block-start: 30px;
    width: 100%;
    display: grid;
    justify-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(var(--grid-width, 300px), 1fr));
    grid-auto-rows: minmax(var(--grid-height, 200px), auto); 
    gap: 1rem;
  }
</style>