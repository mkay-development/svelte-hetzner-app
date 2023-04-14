<script>
  import { onMount } from "svelte";
  import { add } from "../../../stores/servers";
  import { types, load as loadTypes } from "../../../stores/types";
  import { images, load as loadImages } from "../../../stores/images";
  import { locations, load as loadLocation } from "../../../stores/locations";
  import { ssh_keys, load as loadSshKeys } from "../../../stores/ssh_keys";
  import { goto } from "$app/navigation";

  let name = "cx11";
  let server_type = "cx11";
  let image = "ubuntu-22.04";
  let ssh_key = ["jonathan@jm-msi"];
  let location = '';

  onMount(function () {
    loadTypes();
    loadLocation();
    loadImages();
    loadSshKeys();
  });

  let serverAdd = function () {
    add({ name, server_type, image, ssh_key,location});
    goto('/dashboard');
  };
</script>

<h2 class="font-bold text-lg">Server add</h2>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <form on:submit={serverAdd}>
      <div class="form-control mb-3">
        <label for="name" class="block bg-gray-400 px-2 py-2 font-bold text-sm"
          >Name</label
        >
        <input
          type="text"
          bind:value={name}
          id="name"
          class="bg-white px-2 py-2 w-full"
        />
      </div>
      <div class="form-control mb-3">
        <label
          for="server_type"
          class="block bg-gray-400 px-2 py-2 font-bold text-sm">Type</label
        >
        <select
          id="server_type"
          bind:value={server_type}
          class="bg-white px-2 py-2 w-full"
          >{#each $types as type}
            <option value={type.id}>{type.name}</option>
          {/each}</select
        >
      </div>
      <div class="form-control mb-3">
        <label for="image" class="block bg-gray-400 px-2 py-2 font-bold text-sm"
          >Image</label
        >
        <select id="image" bind:value={image} class="bg-white px-2 py-2 w-full"
          >{#each $images as image}
            <option value={image.name}>{image.name}</option>
          {/each}</select
        >
      </div>
      <div class="form-control mb-3">
        <label for="location" class="block bg-gray-400 px-2 py-2 font-bold text-sm"
          >Location</label
        >
        <select id="location" bind:value={location} class="bg-white px-2 py-2 w-full"
          >{#each $locations as location}
            <option value={location.name}>{location.name}</option>
          {/each}</select
        >
      </div>
      <div class="form-control mb-3">
        <label for="location" class="block bg-gray-400 px-2 py-2 font-bold text-sm"
          >SSH Keys</label
        >
        <select id="location" multiple bind:value={ssh_key} class="bg-white px-2 py-2 w-full"
          >{#each $ssh_keys as key}
            <option value={key.name}>{key.name}</option>
          {/each}</select
        >
      </div>
      <section class="actions text-right">
        <button type="submit">erstellen</button>
      </section>
    </form>
  </div>
</div>
