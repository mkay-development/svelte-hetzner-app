<script lang="ts">
    import { onMount } from "svelte";
    import { ssh_keys ,load } from "../../../stores/ssh_keys";
  
    onMount(()=> {
      load();
    });  
  </script>
  
  <div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
    <div class="col-span-6 md:col-span-1">ID</div>
  </div>
  
  {#each $ssh_keys as item}
    <div class="grid grid-cols-12 px-2 py-2 bg-white">
      <div class="col-span-6 md:col-span-1">{item.id}</div>
    </div>
  {/each}
  