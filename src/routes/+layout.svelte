<script>
  import "../tailwind.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { init } from "../stores/hetzner";
  import { onMount } from "svelte";

  onMount(() => {
    init();
  });
</script>

<Header />

<section class="notic mx-auto max-w-5xl bg-red-600 text-white px-2 py-2 flex">
  <span class="font-bold mr-2">Hinweis: </span>
  <p class="text-sm mt-0.5">
    Dies ist keine Offizielle Seite der Hetzner Online GmbH. Dies ist ein
    privates Projekt zu Steuerung der Hetzner Cloud auf dem Handy.
  </p>
</section>

<main class="mx-auto max-w-5xl my-2 px-2 py-2"><slot /></main>

<Footer />
