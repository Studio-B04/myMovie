<script>
  export let action = () => {}
  export let disabled = false;
</script>

<button class="button" {disabled} on:click|preventDefault={action}>
  <slot/>
</button>

<style>
  @import './Button.scss';
</style>
