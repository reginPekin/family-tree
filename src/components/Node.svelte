<script>
  import type { Person } from "../classes";

  import { addParentsFx } from "../stores/persons/effects";

  import Betroth from "./Betroth.svelte";

  export let person: Person;

  const isFemale = person.gender === "female";
  const femaleClasses = "bg-red-400 border-red-600 hover:bg-red-500";
  const maleClasses = "bg-blue-400 border-blue-600 hover:bg-blue-500";
</script>

<div class="flex flex-col items-center justify-end">
  {#if person.parents.mother}
    <Betroth parents={person.parents} />
  {/if}
  <div
    on:click={() => {
      addParentsFx({ child: person });
    }}
    class="{isFemale
      ? femaleClasses
      : maleClasses} rounded-md border shadow-md flex 
    break-normal justify-center items-center text-yellow-50 text-xs cursor-pointer overflow-y-auto m-1 node"
  >
    <span class="h-min text-center uppercase">{person.name}</span>
  </div>
</div>

<style>
  .node {
    width: 110px;
    height: 65px;
  }
</style>
