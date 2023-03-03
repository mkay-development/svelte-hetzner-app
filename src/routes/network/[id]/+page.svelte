<script lang="ts">
  import { networks } from "./../../../stores/networks.ts";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let item = {};

  let load = async function () {
    let response = await fetch(
      "https://api.hetzner.cloud/v1/networks/" + $page.params.id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      }
    );
    let data = await response.json();
    if (data.network) {
      item = data.network;
    }
  };

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <section class="info">
      <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold">ID</h2>
      <p class="block bg-white px-2 py-2">{item.id}</p>
      <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold">Name</h2>
      <p class="block bg-white px-2 py-2">{item.name}</p>
      <h2 class="block text-sm bg-gray-400 px-2 py-2 font-bold">Range</h2>
      <p class="block bg-white px-2 py-2">{item.ip_range}</p>
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">Test</div>
  <div class="col-span-6 md:col-span-2">Test</div>
</div>
