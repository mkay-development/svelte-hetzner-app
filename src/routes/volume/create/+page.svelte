<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { locations, init as initLocations } from "../../../stores/locations";

  let form = {
    name: "",
    location: 1,
    size: 20
  };

  onMount(() => {
    initLocations();
  });

  let create = function () {
    fetch("https://api.hetzner.cloud/v1/volumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("selected_token"),
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.volume) {
          goto("/volumes");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
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
          >Location</label
        >
        <select class="px-2 py-2 w-full bg-white" bind:value={form.location}>
          {#each $locations as location}
            <option value={location.id}> {location.name}</option>
          {/each}
        </select>
      </div>
    </div>
    <section class="actions">
      <button type="submit" on:click={create}>Erstellen</button>
    </section>
  </div>
</div>
