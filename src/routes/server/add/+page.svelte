<script>
  import { onMount } from "svelte";
  import { add } from "../../../stores/servers";
  import { types, load as loadTypes } from "../../../stores/types";
  import { images , load as loadImages } from "../../../stores/images";

  let name = "cx11";
  let server_type = "cx11";
  let image = "ubuntu-22.04";
  let ssh_keys = ["jonathan@jm-msi"];

  onMount(function () {
    loadTypes();
    loadImages();
  });

  let serverAdd = function () {
    add({ name, server_type, image, ssh_keys });
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
        <input type="text" bind:value={name} id="name" class="bg-white px-2 py-2 w-full" />
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
            <option value={type.value}>{type.name}</option>
          {/each}</select
        >
      </div>
      <div class="form-control mb-3">
        <label
          for="image"
          class="block bg-gray-400 px-2 py-2 font-bold text-sm">Image</label
        >
        <select
          id="image"
          bind:value={image}
          class="bg-white px-2 py-2 w-full"
          >{#each $images as image}
            <option value={image.name}>{image.name}</option>
          {/each}</select
        >
      </div>
    </form>
  </div>
</div>
