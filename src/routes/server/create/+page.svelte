<script lang="ts">
  import { onMount } from "svelte";
  import { init as initTypes, server_types } from "../../../stores/server_types";
  import { init as initImages, images } from "../../../stores/images";

  let form = {
    name: "",
    server_type: 1,
    image: 1
  };

  let create = function () {
    fetch("https://api.hetzner.cloud/v1/servers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("selected_token"),
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  onMount(() => {
    initTypes();
    initImages();
  });
</script>

<div class="grid grid-cols-6">
  <div class="cols-span-6 md:col-span-2">
    <div class="form">
      <div class="form-control">
        <label for="name" class="block text-sm font-bold px-2 py-2 bg-gray-400"
          >Name</label
        >
        <input
          type="text"
          bind:value={form.name}
          placeholder="Jonathan Martz"
          class="px-2 py-2 w-full bg-white"
        />
      </div>
      <div class="form-control">
        <label for="name" class="block text-sm font-bold px-2 py-2 bg-gray-400"
          >Typ</label
        >
        <select class="px-2 py-2 w-full bg-white" bind:value={form.server_type}>
          {#each $server_types as type}
            <option value={type.id}> {type.name}</option>
          {/each}
        </select>
      </div>
      <div class="form-control">
        <label for="name" class="block text-sm font-bold px-2 py-2 bg-gray-400"
          >Image</label
        >
        <select class="px-2 py-2 w-full bg-white" bind:value={form.image}>
          {#each $images as image}
            <option value={image.id}> {image.name}</option>
          {/each}
        </select>
      </div>
    </div>
    <section class="actions">
      <button type="submit" on:click={create}>Erstellen</button>
    </section>
  </div>
</div>
