<script lang="ts">
  import ProfileCard from "$lib/components/ProfileCard.svelte";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { load, selected_token,tokens } from "../../stores/hetzner";

  let newToken = "";

  onMount(async () => {
    load();
  });

  let change = function () {
    selected_token.set(newToken);
  };
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <ProfileCard />
  </div>
  <div class="col-span-6 md:col-span-4">
    <div class="headline flex justify-between">
      <h2 class="font-bold text-lg mb-3">Tokens</h2>
      <section class="actions">
        <button
          on:click={function () {
            goto("/settings/tokens");
          }}
        >
          <Fa icon={faEdit} />
        </button>
      </section>
    </div>
    <div class="form">
      {#each $tokens as token}
        <div class="form-control mt-2 flex">
          <label for="token-{token.id}" class="md:w-32 mt-1">{token.name}</label
          >
          <input
            type="text"
            id="token-{token.id}"
            on:change={function () {
              updateToken(token.id, token.token);
            }}
            bind:value={token.token}
            class="w-full px-2 py-2 bg-white text-sm"
            placeholder="Your Token"
          />
        </div>{/each}
    </div>
    <h2 class="font-bold text-lg mb-3 mt-5">Resourcen</h2>
    <div class="grid grid-cols-6 gap-3 mt-5">
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/server_types");
          }}>Server Types</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/images");
          }}>Images</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/ssh_keys");
          }}>SSH Keys</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/volumes");
          }}>Volumes</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/load_balancer_types");
          }}>LB Types</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/locations");
          }}>Locations</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/isos");
          }}>ISO's</button
        >
      </div>
      <div class="col-span-6 md:col-span-3">
        <button
          class="bg-white px-2 py-2 w-full"
          on:click={function () {
            goto("/settings/datacenters");
          }}>Datacenters</button
        >
      </div>
    </div>
  </div>
</div>
