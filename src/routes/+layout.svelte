<script>
  import Notes from "./../lib/components/Notes.svelte";
  import "../tailwind.css";
  import Fa from "svelte-fa";
  import {
    faGear,
    faHeart,
    faList,
    faRightFromBracket,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { init, isLoggedIn } from "../stores/user";
  import { onMount } from "svelte";
  import { addNote } from "../stores/notes";

  onMount(function () {
    init();
    addNote({
      status: "warning",
      text: "Dies ist keine offizielle Webseite von der Hetzner Online GmbH, sondern ein Service von MkaY Development.",
    });
  });
</script>

<svelte:head
  ><script
    defer
    data-domain="hetzner.app"
    src="https://bhkenqpeta4iu6t.plausible.dev/js/script.js"
  ></script></svelte:head
>

<header class="mx-auto max-w-5xl my-2 flex justify-between px-2 py-2">
  <h1 class="text-xl font-bold flex">
    <a href="/">www.Hetzner.app</a>
  </h1>
  <nav class="">
    <ul class="flex space-x-5">
      {#if !$isLoggedIn}
        <li>
          <a href="/login"><Fa icon={faUser} size="1.5x" /></a>
        </li>
      {/if}

      {#if $isLoggedIn}
        <li>
          <a href="/dashboard"><Fa icon={faList} size="1.5x" /></a>
        </li>
        <li>
          <a href="/settings"><Fa icon={faGear} size="1.5x" /></a>
        </li>
        <li>
          <a href="/logout"><Fa icon={faRightFromBracket} size="1.5x" /></a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<section class="max-w-5xl mx-auto"><Notes /></section>

<main class="mx-auto max-w-5xl my-2 px-2 py-2"><slot /></main>

<footer class="mx-auto max-w-5xl my-2 px-2 py-2">
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-2">
      <a href="/impressum">Impressum</a> &
      <a href="/data-privacy">Datenschutz</a>
    </div>
    <div class="col-span-6 md:col-span-2 flex">
      Made with <Fa icon={faHeart} class="mx-2 mt-1 text-red-400" /> by Jonathan
    </div>
    <div class="col-span-6 md:col-span-2">
      Copyright by <a
        href="https://www.mkay-development.de"
        class="text-blue-600">MkaY Development</a
      >
    </div>
  </div>
</footer>
