<script> 
  import { onMount, createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();
  let clientHeight = 0;
  let header;

  function updateHeight() {
    dispatch("updateHeight", header?.clientHeight);
  }

  onMount(() => {
    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  });
</script>

<header bind:this={header}>
  <div>
    <a href="/"><h1>MyMovie</h1></a>
  </div>
</header>

<style>
  header {
    padding: 1rem;
    background-color: darkslategrey;
    color: white;
    box-shadow: 0 0 1rem 0.5rem rgba(0,0,0,0.75);
    z-index: 2;
    position: sticky;
    inset-block-start: 0;
    inset-inline: 0;

    div {
      max-width: 1280px;
      margin: auto;

      a{
        color: inherit;
        text-decoration: none;
      }
    }
  }
</style>