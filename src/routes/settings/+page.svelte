<script>
  import { htoken } from "../../stores/hetzner";
  import ProfileCard from "$lib/components/ProfileCard.svelte";

  let newToken = "";

  let change = function () {
    htoken.set(newToken);
  };
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <ProfileCard />
  </div>
  <div class="col-span-6 md:col-span-4">
    <h2 class="font-bold text-lg mb-3">Settings</h2>
    <div class="form">
      <div class="form-control">
        <label for="token" class="px-2 py-2 bg-gray-400 block text-sm font-bold"
          >Token</label
        >
        <input
          type="text"
          on:input={change}
          bind:value={$htoken}
          id="token"
          class="w-full px-2 py-2 bg-white"
          placeholder="Your Token"
        />
      </div>
    </div>
  </div>
</div>
