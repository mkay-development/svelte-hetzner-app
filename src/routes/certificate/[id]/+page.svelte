<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
  
    let item = {};
  
    let load = async function () {
      let response = await fetch(
        "https://api.hetzner.cloud/v1/certificates/" + $page.params.id,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
          },
        }
      );
      let data = await response.json();
      if (data.certificate) {
        item = data.certificate;
      }
    };
  
    onMount(() => {
      load();
    });
  </script>
  
  {JSON.stringify(item)}
  