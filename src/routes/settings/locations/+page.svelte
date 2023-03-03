<script lang="ts">
    import { onMount } from "svelte";
    import { locations ,load } from "../../../stores/locations";
  
    onMount(()=> {
      load();
    });  
  </script>
  
  <div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
    <div class="col-span-6 md:col-span-2">ID</div>
    <div class="col-span-6 md:col-span-2">Name</div>
    <div class="col-span-6 md:col-span-2">Land</div>
    <div class="col-span-6 md:col-span-3">Stadt</div>
    <div class="col-span-6 md:col-span-3">Netzwerk</div>
  </div>
  
  {#each $locations as item}
    <div class="grid grid-cols-12 px-2 py-2 bg-white">
      <div class="col-span-6 md:col-span-2">{item.id}</div>
      <div class="col-span-6 md:col-span-2">{item.name}</div>
      <div class="col-span-6 md:col-span-2">{item.country}</div>
      <div class="col-span-6 md:col-span-3">{item.city}</div>
      <div class="col-span-6 md:col-span-3">{item.network_zone}</div>
    </div>
  {/each}
  