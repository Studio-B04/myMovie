<script> 
  import { onMount, createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();
  let clientHeight = 0;
  let footer;

  function updateHeight() {
    dispatch("updateHeight", footer?.clientHeight);
  }

  onMount(() => {
    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(footer);
    return () => resizeObserver.disconnect();
  });
</script>

<footer bind:this={footer}>
  <div>
    Copyright @StudioB04 | 2024
  </div>
</footer>

<style>

  footer {
    font-size: .9rem;
    background-color: lightslategrey;
    color: white;
    z-index: 2;

    div {
      max-width: 1280px;
      margin: auto;
      padding: 20px;
      text-align: right;
    }
  }
</style>