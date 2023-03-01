<script>
  import { onMount } from "svelte";
  import { init, isLoggedIn } from "../../stores/user";

  onMount(function () {
    init();
  });
</script>

<header class="mx-auto max-w-5xl my-2 flex justify-between px-2 py-2">
  <h1 class="text-xl font-bold"><a href="/">Logo</a></h1>
  <nav>
    <ul class="flex space-x-5">
      {#if !$isLoggedIn}
        <li><a href="/login">Login</a></li>
      {:else}
        <li><a href="/settings">Settings</a></li>
        <li><a href="/servers">Servers</a></li>
        <li><a href="/logout">Logout</a></li>
      {/if}
    </ul>
  </nav>
</header>
