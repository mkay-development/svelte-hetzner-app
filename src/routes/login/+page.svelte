<script>
  import PocketBase from "pocketbase";
  import { token, userData, isLoggedIn } from "../../stores/user";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";

  let login = async function () {
    const pb = new PocketBase("https://tf7voewz4y2hz8z.pocketbase.tech");

    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    if (authData.token) {
      token.set(authData.token);
      userData.set(authData.record);
      isLoggedIn.set(true);
      goto("/servers");
    }
  };
</script>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <h2 class="font-bold text-lg mb-3">Login</h2>
    <div class="form">
      <div class="form-control mt-3">
        <label for="email" class="block bg-gray-400 px-2 py-2 font-bold text-sm"
          >Email</label
        >
        <input
          type="email"
          class="w-full bg-white px-2 py-2"
          placeholder="user@jmartz.de"
          bind:value={email}
        />
      </div>
      <div class="form-control mt-3">
        <label
          for="password"
          class="block bg-gray-400 px-2 py-2 font-bold text-sm">Pasword</label
        >
        <input
          type="password"
          class="w-full bg-white px-2 py-2"
          placeholder="test123"
          bind:value={password}
        />
      </div>
      <div class="actions flex justify-between">
        <button on:click={login} class="mt-2 px-2 bg-white py-2 font-bold"
          >Login</button
        >
      </div>
    </div>
  </div>
</div>
