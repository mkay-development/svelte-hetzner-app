<script lang="ts">
  import { onMount } from "svelte";
  import { server_types ,load } from "../../../stores/server_types";

  onMount(()=> {
    load();
  });

</script>

<div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
  <div class="col-span-6 md:col-span-1">ID</div>
  <div class="col-span-6 md:col-span-1">Name</div>
  <div class="col-span-6 md:col-span-1">Beschreibung</div>
  <div class="col-span-6 md:col-span-1">Cores</div>
  <div class="col-span-6 md:col-span-1">Memory</div>
  <div class="col-span-6 md:col-span-1">Disks</div>
  <div class="col-span-6 md:col-span-2">Disk Type</div>
  <div class="col-span-6 md:col-span-2">CPU Type</div>
  <div class="col-span-6 md:col-span-2">Price (stündlich, monatlich)</div>
</div>

{#each $server_types as item}
  <div class="grid grid-cols-12 px-2 py-2 bg-white">
    <div class="col-span-6 md:col-span-1">{item.id}</div>
    <div class="col-span-6 md:col-span-1">{item.name}</div>
    <div class="col-span-6 md:col-span-1">{item.description}</div>
    <div class="col-span-6 md:col-span-1">{item.cores}</div>
    <div class="col-span-6 md:col-span-1">{item.memory}</div>
    <div class="col-span-6 md:col-span-1">{item.disk}</div>
    <div class="col-span-6 md:col-span-2">{item.storage_type}</div>
    <div class="col-span-6 md:col-span-2">{item.cpu_type}</div>
    <div class="col-span-6 md:col-span-2">
        {#each item.prices as price}
          {price.location}
          {price.price_hourly.net}
          {price.price_monthly.net}
          <br />
        {/each}
      </div>
  </div>
{/each}
