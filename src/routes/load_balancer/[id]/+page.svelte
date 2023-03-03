<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let item = {};

  let load = async function () {
    let response = await fetch(
      "https://api.hetzner.cloud/v1/load_balancers/" + $page.params.id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      }
    );
    let data = await response.json();
    if (data.load_balancer) {
      item = data.load_balancer;
    }
  };

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <section class="info">
      <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold mt-3">ID</h2>
      <p class="block bg-white px-2 py-2">{item.id}</p>
      <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold mt-3">Name</h2>
      <p class="block bg-white px-2 py-2">{item.name}</p>
      {#if item.public_net}
        <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold mt-3">Range</h2>
        <p class="block bg-white px-2 py-2">{item.public_net.ipv4.ip}</p>
      {/if}
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">Test</div>
  <div class="col-span-6 md:col-span-2">Test</div>
</div>
