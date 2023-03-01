<script>
  import { faRobot, faServer } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<h2 class="font-bold text-lg block text-center mt-5 mb-10">
  Willkommen bei der Hetzner.app zur Steuerung der Cloud per mobile Gerät.
</h2>
<div class="grid grid-cols-6 mt-5">
  <div class="col-span-6 md:col-span-2">
    <a href="/servers">
      <Fa icon={faServer} size="5x" class="mx-auto mb-3" /></a
    >
    <h2 class="block text-center font-bold">Server</h2>
  </div>
  <div class="col-span-6 md:col-span-2">
    <a href="/robot"> <Fa icon={faRobot} size="5x" class="mx-auto mb-3" /></a>
    <h2 class="block text-center font-bold">Robot</h2>
  </div>
  <div class="col-span-6 md:col-span-2">Test</div>
</div>
