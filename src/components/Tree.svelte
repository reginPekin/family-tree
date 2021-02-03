<script>
  import { onMount } from "svelte";
  import Node from "./Node.svelte";

  import { getPerson } from "../utils";

  import { setTreeFx } from "../stores/persons/events";

  import { persons, me, tree } from "../stores/persons";
  import { parents } from "../stores/parents";

  import {
    getPersonsFx,
    getMeFx,
    addPersonFx,
  } from "../stores/persons/effects";
  import { getAllParentsFx } from "../stores/parents/effects";

  import type { Person } from "../classes";

  onMount(async () => {
    await getPersonsFx();
    await getAllParentsFx();
    await getMeFx();

    setTreeFx(getPerson($me.id, $persons, $parents));
    console.log($tree, "TREE");
  });
</script>

{#if $tree.id}
  <Node name={$tree.name} gender={$tree.gender} />
{:else}
  <p
    on:click={() => {
      addPersonFx({ name: "me", gender: "female" });
    }}
  >
    Create new
  </p>
{/if}
