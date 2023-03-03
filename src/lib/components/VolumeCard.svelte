<script>
  import { onMount } from "svelte";
  export let identifier;

  let item = {};

  let load = async function () {
    let response = await fetch(
      "https://api.hetzner.cloud/v1/volumes/" + identifier,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      }
    );
    let data = await response.json();
    if (data.volume) {
      item = data.volume;
    }
  };

  onMount(() => {
    load();
  });
</script>

<section class="card volume">
  {#if item}
    {item.id}
    {item.name}
    {item.size}
  {/if}
</section>
