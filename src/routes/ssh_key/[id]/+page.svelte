<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let item = {};

  let load = async function () {
    let response = await fetch(
      "https://api.hetzner.cloud/v1/ssh_keys/" + $page.params.id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      }
    );
    let data = await response.json();
    if (data.ssh_key) {
      item = data.ssh_key;
    }
  };

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
  <div class="col-span-6 md:col-span-2">ID</div>
  <div class="col-span-6 md:col-span-2">Name</div>
  <div class="col-span-6 md:col-span-7">Fingerprint</div>
  <div class="col-span-6 md:col-span-1">Aktionen</div>
</div>

<div class="grid grid-cols-12 px-2 py-2 bg-white">
  <div class="col-span-6 md:col-span-2">{item.id}</div>
  <div class="col-span-6 md:col-span-2">{item.name}</div>
  <div class="col-span-6 md:col-span-7">{item.fingerprint}</div>
  <div class="col-span-6 md:col-span-1">Aktion</div>
</div>
