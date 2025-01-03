<script>
  export let level = undefined;
  export let size = "m";
  export let align = "start";
</script>

<svelte:element this={level ? `h${level}` : "strong"} class="title title--{size} title--{align}">
  <slot/>
</svelte:element>

<style lang="scss">
  .title {
    font-weight: bold;

    &.title--xs  { font-size: 1rem; }
    &.title--s   { font-size: 1.2rem; }
    &.title--md  { font-size: 1.6rem; }
    &.title--l   { font-size: 2rem; }
    &.title--xl  { font-size: 2.6rem; }
    &.title--xxl { font-size: 3.4rem; }

    &.title--start  { text-align: start; }
    &.title--end    { text-align: end; }
    &.title--center { text-align: center; }

    margin-block-end: .8em;
  }
</style>