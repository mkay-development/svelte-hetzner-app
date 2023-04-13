<script>
  import { onMount } from "svelte";
  import { servers, load, remove } from "../../stores/servers";
  import { faPlus } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { goto } from "$app/navigation";

  onMount(function () {
    load();
  });
</script>

<section class="headline flex justify-between">
  <h2 class="font-bold text-lg mb-3">Server</h2>
  <section class="actions bg-gray-400 px-2 py-2 mb-2">
    <button
      on:click={function () {
        goto("/server/add");
      }}
    >
      <Fa icon={faPlus} /></button
    >
  </section>
</section>

<div class="grid grid-cols-12 px-2 py-2 bg-gray-400 font-bold text-sm">
  <div class="col-span-6 md:col-span-2">Id</div>
  <div class="col-span-6 md:col-span-2">Name</div>
  <div class="col-span-6 md:col-span-2">Status</div>
  <div class="col-span-6 md:col-span-2">Created</div>
</div>

{#if $servers.length > 0}
  {#each $servers as server}
    <div class="grid grid-cols-12 px-2 py-2">
      <div class="col-span-6 md:col-span-2">{server.id}</div>
      <div class="col-span-6 md:col-span-2">{server.name}</div>
      <div class="col-span-6 md:col-span-2">{server.status}</div>
      <div class="col-span-6 md:col-span-2">{server.created}</div>
      <div class="col-span-12 md:col-span-2">
        <button
          class="bg-gray-400 px-2 py-2"
          on:click={function () {
            if (
              confirm(
                "Bist du sicher das du den Server mit der ID löschen willst ?"
              )
            ) {
              remove(server.id);
            }
          }}>Löschen</button
        >
      </div>
    </div>
  {/each}
{:else}
  <p class="block bg-white px-2 py-2 text-center text-sm font-bold">
    Keine Server gefunden.
  </p>
{/if}
