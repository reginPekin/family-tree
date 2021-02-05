<script>
  import { onMount } from "svelte";

  import Node from "./Node.svelte";

  import { getPerson } from "../utils";

  import { setTreeFx } from "../stores/tree/events";
  import { persons, me } from "../stores/persons";
  import { parents } from "../stores/parents";
  import { tree } from "../stores/tree";

  import {
    getPersonsFx,
    getMeFx,
    addPersonFx,
  } from "../stores/persons/effects";
  import { getAllParentsFx } from "../stores/parents/effects";

  onMount(async () => {
    await getPersonsFx();
    await getAllParentsFx();
    await getMeFx();

    tree.map((watchedTree) => {
      console.log(watchedTree, "watchedTree inside TREE");
    });

    if ($me.id) {
      setTreeFx(getPerson($me.id, $persons, $parents));
    }
  });
</script>

{#if $tree.id}
  <Node person={$tree} />
{:else}
  <p
    on:click={async () => {
      addPersonFx({ data: { name: "me", gender: "female" } });
    }}
  >
    Create new
  </p>
{/if}
