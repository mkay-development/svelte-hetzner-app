<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let tokens = [];

  onMount(() => {
    if (browser) {
      tokens = JSON.parse(localStorage.getItem("tokens") || "[]") || [];
    }
  });
</script>

{#each tokens as token}
  {token}
{/each}
