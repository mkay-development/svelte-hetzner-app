<script lang="ts">
  import { onMount } from "svelte";
  import { htoken, init } from "../../stores/hetzner";

  let items: [] = [];
  let data = [];

  let load = async function () {
    let response = await fetch(" https://api.hetzner.cloud/v1/servers", {
      headers: {
        Authorization: "Bearer " + $htoken,
      },
    });
    data = await response.json();
    if (data.servers) {
      items = data.servers;
    }
  };

  onMount(() => {
    init();
    load();
  });
</script>

{#each items as item}
  {item.id}
  {item.name}
{/each}
