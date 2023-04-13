<script>
  import { url } from "./../../stores/backend";
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";

  let email = "";
  let password = "";

  onMount(function () {
    const pb = new PocketBase($url);
    if (pb.authStore.isValid) {
      goto("/dashboard");
    }
  });

  let login = async function () {
    const pb = new PocketBase($url);
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    if (authData.token) {
      goto("/dashboard");
    }
  };
</script>

<svelte:head>
  <title>Login - Hetzner.app</title>
</svelte:head>
<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <h2 class="font-bold text-lg">Login</h2>
    <div class="form">
      <div class="form-control mt-2">
        <label for="email" class="block px-2 py-2 bg-gray-400 text-sm"
          >Email</label
        >
        <input
          type="email"
          bind:value={email}
          id="email"
          placeholder="mail@jmartz.de"
          class="w-full px-2 py-2 bg-white"
        />
      </div>
      <div class="form-control mt-2">
        <label for="password" class="block px-2 py-2 bg-gray-400 text-sm"
          >Password</label
        >
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="mail@jmartz.de"
          class="w-full px-2 py-2 bg-white"
        />
      </div>
      <div class="actions flex justify-between mt-3">
        <div class="left" />
        <div class="right">
          <button on:click={login} class="bg-white px-2 py-2">abschicken</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
