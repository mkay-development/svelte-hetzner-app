<script lang="ts">
  import {
    faPlus,
    faRotateRight,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { load, servers, init } from "../../stores/servers";

  let removeServer = function (id: number) {
    if (
      confirm(
        "Are you realy sure that you want to delete the Server with the id " +
          id +
          " ?"
      )
    ) {
      fetch("https://api.hetzner.cloud/v1/servers/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  onMount(() => {
    load();
  });
</script>

<div class="headline flex justify-between">
  <h2 class="font-bold text-lg">Servers</h2>
  <section class="actions">
    <button
      on:click={function () {
        goto("/server/create");
      }}><Fa icon={faPlus} /></button
    >
    <button
      on:click={function () {
        init();
      }}><Fa icon={faRotateRight} /></button
    >
  </section>
</div>

<div class="grid grid-cols-12 font-bold text-sm px-2 py-2 bg-gray-400">
  <div class="col-span-6 md:col-span-2">ID</div>
  <div class="col-span-6 md:col-span-2">Name</div>
  <div class="col-span-6 md:col-span-2">Status</div>
  <div class="col-span-6 md:col-span-2">IPV4</div>
  <div class="col-span-6 md:col-span-2">Aktionen</div>
</div>

{#each $servers as item}
  <div class="grid grid-cols-12 px-2 py-2 bg-white">
    <div class="col-span-6 md:col-span-2">
      <a href="/server/{item.id}">{item.id}</a>
    </div>
    <div class="col-span-6 md:col-span-2">{item.name}</div>
    <div class="col-span-6 md:col-span-2">{item.status}</div>
    <div class="col-span-6 md:col-span-2">{item.public_net.ipv4.ip}</div>
    <div class="col-span-6 md:col-span-2 flex space-x-5">
      <button
        on:click={function () {
          removeServer(item.id);
        }}
        class="px-2 py-2 bg-white"><Fa icon={faTrash} /></button
      >
    </div>
  </div>
{/each}
