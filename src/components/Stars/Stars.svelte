<script>
  export let score = 0;

  const clampedScore = Math.max(0, Math.min(5, score));
  const fullStars = Math.floor(clampedScore);
  const hasHalfStar = clampedScore % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const result = "★".repeat(fullStars) + (hasHalfStar ? "⭒" : "") + "☆".repeat(emptyStars);
</script>

<span aria-hidden="true">
  {#each new Array(fullStars) as _}
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z"></path>
    </svg>
    {/each}
    
    {#if hasHalfStar}
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16,6.52l2.76,5.58.46,1,1,.15,6.16.89L22,18.44l-.75.73.18,1,1.05,6.13-5.51-2.89L16,23l-.93.49L9.56,26.34l1-6.13.18-1L10,18.44,5.58,14.09l6.16-.89,1-.15.46-1L16,6.52M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z" />
      <path d="M11.45 11.22L1.28 12.7 8.64 19.87 6.9 30 16 25.22 16 2 11.45 11.22z"></path>
    </svg>
  {/if}

  {#each new Array(emptyStars) as _}
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16,6.52l2.76,5.58.46,1,1,.15,6.16.89L22,18.44l-.75.73.18,1,1.05,6.13-5.51-2.89L16,23l-.93.49L9.56,26.34l1-6.13.18-1L10,18.44,5.58,14.09l6.16-.89,1-.15.46-1L16,6.52M16,2l-4.55,9.22L1.28,12.69l7.36,7.18L6.9,30,16,25.22,25.1,30,23.36,19.87l7.36-7.17L20.55,11.22Z" />
    </svg>
  {/each}
</span>

<style>
  span {
    font-size: 1em;
    display: inline-flex;

    svg {
      fill: orangered;
      width: 1em;
      height: 1em;
    }
  }
</style>

