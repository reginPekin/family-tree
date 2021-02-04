<script>
  import type { Person } from "../classes";

  import { addParentsFx } from "../stores/persons/effects";

  export let person: Person;

  const isFemale = person.gender === "female";
  const femaleClasses = "bg-red-400 border-red-600 hover:bg-red-500";
  const maleClasses = "bg-blue-400 border-blue-600 hover:bg-blue-500";
</script>

<div
  on:click={() => {
    addParentsFx({ child: person });
  }}
  class="{isFemale
    ? femaleClasses
    : maleClasses} rounded-md border shadow-md flex 
    break-normal justify-center items-center text-yellow-50 text-xs cursor-pointer  node"
>
  <span class="h-min text-center">{person.name}</span>
</div>

<style>
  .node {
    width: 110px;
    height: 65px;
  }
</style>
