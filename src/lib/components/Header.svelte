<script>
  import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from "svelte";
  import { init, isLoggedIn } from "../../stores/user";
  import Fa from "svelte-fa";
  import { open } from "../../stores/navigation";

  onMount(function () {
    init();
  });
</script>

<header class="mx-auto max-w-5xl my-2 flex justify-between px-2 py-2">
  <h1 class="text-xl font-bold"><a href="/">Logo</a></h1>
  <nav class="hidden md:block">
    <ul class="flex space-x-5">
      {#if !$isLoggedIn}
        <li><a href="/login">Login</a></li>
      {:else}
        <li><a href="/settings">Settings</a></li>
        <li><a href="/servers">Servers</a></li>
        <li><a href="/ssh-keys">SSH Keys</a></li>
        <li><a href="/certificates">Certs</a></li>
        <li><a href="/volumes">Volumes</a></li>
        <li><a href="/load-balancers">Load Balancer</a></li>
        <li><a href="/networks">Networks</a></li>
        <li><a href="/logout">Logout</a></li>
      {/if}
    </ul>
  </nav>
  <nav class="md:hidden">
    {#if $open}
      <button
        on:click={function () {
          open.set(!$open);
        }}><Fa icon={faTimes} class="mt-1" size="1.5x" /></button
      >
    {:else}
      <button
        on:click={function () {
          open.set(!$open);
        }}><Fa icon={faBars} class="mt-1" size="1.5x" /></button
      >
    {/if}
  </nav>
</header>
{#if $open}
  <section class="mobile-content px-2 py-2 bg-white mx-2 my-2 md:hidden">
    <div class="grid grid-cols-8 gap-3">
      <div class="col-span-4 sm:col-span-2">
        <a href="/settings">Settings</a>
      </div>
      <div class="col-span-4 sm:col-span-2"><a href="/servers">Servers</a></div>
      <div class="col-span-4 sm:col-span-2">
        <a href="/ssh-keys">SSH Keys</a>
      </div>
      <div class="col-span-4 sm:col-span-2">
        <a href="/certificates">Certs</a>
      </div>
      <div class="col-span-4 sm:col-span-2"><a href="/volumes">Volumes</a></div>
      <div class="col-span-4 sm:col-span-2">
        <a href="/load-balancers">Load Balancer</a>
      </div>
      <div class="col-span-4 sm:col-span-2">
        <a href="/networks">Networks</a>
      </div>
      <div class="col-span-4 sm:col-span-2"><a href="/logout">Logout</a></div>
    </div>
  </section>
{/if}
