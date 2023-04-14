<script>
  import { onMount } from "svelte";
  import { htokens, add, init, htoken } from "../../stores/hetzner";

  onMount(function () {
    init();
  });

  let t = "";
</script>

<h2 class="font-bold text-lg">Settings</h2>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <section class="add-token">
      <form
        on:submit={function () {
          add(t);
        }}
      >
        <div class="form-control">
          <label
            for="token"
            class="block bg-gray-400 px-2 py-2 text-sm font-bold">Token</label
          >
          <input
            type="text"
            id="token"
            bind:value={t}
            class="w-full bg-white px-2 py-2"
          />
        </div>
        <section class="actions">
          <button type="submit">abschicken</button>
        </section>
      </form>
    </section>
  </div>
</div>

<h2 class="font-bold text-lg mt-6">Tokens</h2>
{#each $htokens as token, index}
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-1 break-all">{index}</div>
    <div class="col-span-6 md:col-span-4 break-all">{token}</div>
    <div class="col-span-6 md:col-span-1 break-all space-x-2">
      {#if !(token == localStorage.getItem("htoken"))}<button
          on:click={function () {
            htoken.set(token);
            init();
          }}
          class="bg-gray-400 px-2 py-2">aktivieren</button
        ><button
          on:click={function () {
            htoken.set(token);
            init();
          }}
          class="bg-gray-400 px-2 py-2">löschen</button
        >
      {/if}
    </div>
  </div>
{/each}
