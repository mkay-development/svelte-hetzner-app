<script>
    import Fa from "svelte-fa";
    import { faCircleExclamation, faExclamationTriangle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
    import { items } from "../../stores/notes";
  </script>
  
  <section class="messages px-2 py-2 max-w-5xl my-2 mx-auto space-y-2">
    {#each $items as item}
      {#if item.status == "error"}
        <section class="message px-2 py-2 bg-red-600 text-white flex">
          <Fa icon={faCircleExclamation} class="mt-1 mx-2" />
          {item.text}
        </section>
      {:else if item.status == "success"}
        <section class="message px-2 py-2 bg-green-600 text-white flex">
          <Fa icon={faInfoCircle} class="mt-1 mx-2" />
          {item.text}
        </section>
      {:else if item.status == "warning"}
        <section class="message px-2 py-2 bg-orange-600 text-white flex">
          <Fa icon={faExclamationTriangle} class="mt-1 mx-2" />
          {item.text}
        </section>
      {/if}
    {/each}
  </section>
  