<script lang="ts">
  import { certificates } from "./../../../stores/certificates.ts";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let form = {
    name: "test",
    domain_names: ["www.m4rtz.de"],
    type: "managed",
  };

  let create = function () {
    fetch("https://api.hetzner.cloud/v1/certificates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("selected_token"),
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.certificate) {
          goto("/certificates");
        }
      });
  };

  onMount(() => {});
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
      <div class="form-control mt-3">
        <label for="name" class="block text-sm font-bold px-2 py-2 bg-gray-400"
          >Private Key</label
        >
        <input
          type="text"
          bind:value={form.private_key}
          placeholder="Jonathan Martz"
          class="px-2 py-2 w-full bg-white"
        />
      </div>
      <div class="form-control mt-3">
        <label for="name" class="block text-sm font-bold px-2 py-2 bg-gray-400"
          >Private Key</label
        >
        <input
          type="text"
          bind:value={form.certificate}
          placeholder="Jonathan Martz"
          class="px-2 py-2 w-full bg-white"
        />
      </div>
    </div>
    <section class="actions mt-3">
      <button type="submit" on:click={create}>Erstellen</button>
    </section>
  </div>
</div>
