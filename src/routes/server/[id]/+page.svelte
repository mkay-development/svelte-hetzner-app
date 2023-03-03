<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import VolumeCard from "$lib/components/VolumeCard.svelte";

  let item = {};

  let load = async function () {
    let response = await fetch(
      "https://api.hetzner.cloud/v1/servers/" + $page.params.id,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
      }
    );
    let data = await response.json();
    if (data.server) {
      item = data.server;
    }
  };

  onMount(() => {
    load();
  });
</script>
Volumes labels protection locked rescue_enabled

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <img
      src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
      alt=""
    />
    <h2>ID: {item.id}</h2>
    <h2>Name: {item.name}</h2>
    <h2>Status: {item.status}</h2>
  </div>
  {#if item.server_type}
    <div class="col-span-6 md:col-span-4">
      <h2 class="font-bold text-lg mb-3">Typ:</h2>
      <div class="grid grid-cols-12 bg-gray-400 px-2 text-sm py-2 font-bold">
        <div class="col-span-6 md:col-span-2">ID</div>
        <div class="col-span-6 md:col-span-2">Name</div>
        <div class="col-span-6 md:col-span-8">Preise</div>
        <div class="col-span-6 md:col-span-2 mt-2">Cores</div>
        <div class="col-span-6 md:col-span-2 mt-2">Memory</div>
        <div class="col-span-6 md:col-span-8 mt-2">Disk</div>
      </div>

      <div class="grid grid-cols-12 px-2 py-2 bg-white">
        <div class="col-span-6 md:col-span-2">{item.server_type.id}</div>
        <div class="col-span-6 md:col-span-2">{item.server_type.name}</div>
        <div class="col-span-6 md:col-span-8">
          {#each item.server_type.prices as price}
            {price.location}
            {price.price_hourly.net}
            {price.price_monthly.net}
            <br />
          {/each}
        </div>
        <div class="col-span-6 md:col-span-2">{item.server_type.cores}</div>
        <div class="col-span-6 md:col-span-2">{item.server_type.memory}</div>
        <div class="col-span-6 md:col-span-8">{item.server_type.disk}</div>
      </div>
    </div>
  {/if}
  {#if item.public_net}
    <div class="col-span-6 md:col-span-2">
      <b>Public Ip v4</b> <br />
      {item.public_net.ipv4.id} |
      {item.public_net.ipv4.ip} <br />
      <b>Public Ip v6</b> <br />
      {item.public_net.ipv6.id} |
      {item.public_net.ipv6.ip}
    </div>
  {/if}
  {#if item.datacenter}
    <div class="col-span-6 md:col-span-4">
      <h2 class="font-bold text-lg mb-3">Datacenter</h2>
      <div class="grid grid-cols-12 px-2 py-2 bg-white">
        <div class="col-span-6 md:col-span-4">{item.datacenter.id}</div>
        <div class="col-span-6 md:col-span-4">{item.datacenter.name}</div>
        <div class="col-span-6 md:col-span-4">
          {item.datacenter.description}
        </div>
      </div>
      <h2 class="font-bold text-lg mb-3 mt-3">Location</h2>
      <div class="grid grid-cols-12 px-2 py-2 bg-white">
        <div class="col-span-6 md:col-span-4">
          {item.datacenter.description}
        </div>
        <div class="col-span-6 md:col-span-4">
          {item.datacenter.location.latitude} |
          {item.datacenter.location.longitude}
        </div>
        <div class="col-span-6 md:col-span-4">
          {item.datacenter.location.network_zone}
        </div>
      </div>
      <h2 class="font-bold text-lg mb-3 mt-3">Image</h2>
      <div class="grid grid-cols-12 px-2 py-2 bg-white">
        <div class="col-span-6 md:col-span-2">
          {item.image.id}
        </div>
        <div class="col-span-6 md:col-span-2">
          {item.image.disk_size}
        </div>
        <div class="col-span-6 md:col-span-4">
          {item.image.type}
        </div>
        <div class="col-span-6 md:col-span-4">
          {item.image.description}
        </div>
      </div>
    </div>
  {/if}
  <div class="col-span-6 md:col-span-2">

  </div>
  <div class="col-span-6 md:col-span-4">
    <div class="grid grid-cols-6">
      <div class="col-span-6 md:col-span-3">
        {#if item.volumes}
          {#each item.volumes as volume}
            <VolumeCard identifier={volume} />
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
