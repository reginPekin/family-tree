<script>
  import Node from "./Node.svelte";

  import type { Parents } from "../classes";
  import { onMount } from "svelte";

  export let parents: Parents;

  let mother: HTMLDivElement;
  let father: HTMLDivElement;

  $: motherRect = mother && mother.getBoundingClientRect();
  $: fatherRect = father && father.getBoundingClientRect();

  onMount(() => {
    if (mother) {
      console.log(mother.getBoundingClientRect(), "MOTHER");
    }

    // console.log(motherRect, "MOTHER RECT");
  });
</script>

<div class="flex">
  {#if parents.mother}
    <div bind:this={mother}>
      <Node person={parents.mother} />
    </div>
  {/if}

  {#if parents.father}
    <div bind:this={father}>
      <Node person={parents.father} />
    </div>
  {/if}
</div>

<style>
</style>
