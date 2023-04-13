<script>
  import { htokens, add } from "../../stores/hetzner";

  let t = '';
</script>

<h2 class="font-bold text-lg">Test</h2>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <section class="add-token">
      <form
        on:submit={function () {
          add(t);
        }}
      >
        <div class="form-control">
          <label class="block bg-gray-400 px-2 py-2 text-sm font-bold"
            >Token</label
          >
          <input type="text" bind:value={t} class="w-full bg-white px-2 py-2" />
        </div>
        <section class="actions">
          <button type="submit">abschicken</button>
        </section>
      </form>
    </section>
  </div>
</div>

{#each $htokens as token}
  {token}
{/each}
