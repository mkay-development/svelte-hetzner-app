<script lang="ts">
  import { onMount } from "svelte";
  import {
    load_balancer_types,
    load,
  } from "../../../stores/load_balancer_types";

  onMount(() => {
    load();
  });
</script>

<div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
  <div class="col-span-6 md:col-span-1">ID</div>
  <div class="col-span-6 md:col-span-2">Name</div>
  <div class="col-span-6 md:col-span-2">Max. Verbindungen</div>
  <div class="col-span-6 md:col-span-1">Services</div>
  <div class="col-span-6 md:col-span-1">CA's</div>
  <div class="col-span-6 md:col-span-1">Targets</div>
  <div class="col-span-6 md:col-span-1">Preise</div>
</div>

{#each $load_balancer_types as item}
  <div class="grid grid-cols-12 px-2 py-2 bg-white">
    <div class="col-span-6 md:col-span-1">{item.id}</div>
    <div class="col-span-6 md:col-span-2">{item.name}</div>
    <div class="col-span-6 md:col-span-2">{item.max_connections}</div>
    <div class="col-span-6 md:col-span-1">{item.max_services}</div>
    <div class="col-span-6 md:col-span-1">{item.max_assigned_certificates}</div>
    <div class="col-span-6 md:col-span-1">{item.max_targets}</div>
    <div class="col-span-6 md:col-span-4">
      {#each item.prices as price}
        {price.location}: 
        {price.price_hourly.net}/
        {price.price_monthly.net}
        <br />
      {/each}
    </div>
  </div>
{/each}
