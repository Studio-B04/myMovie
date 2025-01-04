<script> 
  import Button from "@components/Button/Button.svelte";
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

    <span>
      <Button action={() => window.scrollTo({top: 0, behavior: "smooth"})}>↑</Button>
    </span>
  </div>
</footer>

<style>

  footer {
    font-size: .9rem;
    background-color: lightslategrey;
    color: white;
    z-index: 2;

    div {
      position: relative;
      max-width: 1280px;
      margin: auto;
      padding: 20px;
      text-align: right;

      span {
        inset-block-start: -100%;
        position: absolute;
        border-radius: 999px;
        overflow: hidden;
        font-size: 1.5rem;
        box-shadow: 0 0.5rem 0.5rem -0.5rem black;
        cursor: pointer;
      }
    }
  }
</style>