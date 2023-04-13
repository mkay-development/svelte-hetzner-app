<script>
  import { goto } from "$app/navigation";
  import { url } from "./../../stores/backend";
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";

  onMount(function () {
    const pb = new PocketBase($url);
    pb.authStore.clear();
    goto("/");
  });
</script>
