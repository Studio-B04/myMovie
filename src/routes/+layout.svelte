<script>
  import { onMount } from "svelte";
  import Header from "@components/Header/Header.svelte";
  import Footer from "@components/Footer/Footer.svelte";

  let headerHeight = 0;
  let footerHeight = 0;
</script>

<Header on:updateHeight={({detail}) => {headerHeight = detail}} />

<main style='--header-height: {headerHeight}px; --footer-height: {footerHeight}px'>
  <div>
    <slot/>
  </div>
</main>

<Footer on:updateHeight={({detail}) => {footerHeight = detail}} />


<style>
  main {
    max-width: 1320px;
    margin: auto;
    padding-block: 40px;
    min-height: calc(100dvh - var(--header-height, 0) - var(--footer-height, 0));
    z-index: 1;
    
    div {
      padding: 20px;
    }
  }
</style>