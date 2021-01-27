<script lang="typescript">
  import { countStore, incCount, decCount } from "./stores/count";
  import Typography from "./Typography.svelte";
</script>

<div>
  <button
    on:click={() => incCount()}
    class="bg-red-600 text-white py-2 px-4 hover:bg-red-700">INC</button>
  <button
    on:click={() => decCount()}
    class="bg-black text-white py-2 px-4 hover:bg-white hover:text-black">DEC</button>

  <p class="text-2xl font-semibold">{$countStore}</p>
  <Typography text="Hello Svelte" classnames="text-red-600" />
</div>
