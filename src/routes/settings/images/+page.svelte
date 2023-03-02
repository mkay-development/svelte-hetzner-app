<script lang="ts">
    import { onMount } from "svelte";
    import { images ,load } from "../../../stores/images";
  
    onMount(()=> {
      load();
    });  
  </script>
  
  <div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
    <div class="col-span-6 md:col-span-2">ID</div>
    <div class="col-span-6 md:col-span-2">Type</div>
    <div class="col-span-6 md:col-span-2">Name</div>
    <div class="col-span-6 md:col-span-2">Description</div>
  </div>
  
  {#each $images as item}
    <div class="grid grid-cols-12 px-2 py-2 bg-white">
      <div class="col-span-6 md:col-span-2">{item.id}</div>
      <div class="col-span-6 md:col-span-2">{item.type}</div>
      <div class="col-span-6 md:col-span-2">{item.name}</div>
      <div class="col-span-6 md:col-span-2">{item.description}</div>     
    </div>
  {/each}
  