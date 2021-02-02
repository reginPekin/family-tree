<script>
  import { addParentsFx } from "../stores/persons/effects";

  export let name = "";
  export let gender: "male" | "female" = "female";
  export let parentsId: number;

  const isFemale = gender === "female";
  const femaleClasses = "bg-red-400 border-red-600";
  const maleClasses = "bg-blue-400 border-blue-600";
</script>

<div
  class="{isFemale
    ? femaleClasses
    : maleClasses} rounded-md border shadow-md flex 
    break-normal justify-center items-center text-yellow-50 text-xs node"
  on:click={() => {
    addParentsFx({ childName: name, parentsId });
  }}
>
  <span class="h-min text-center">{name}</span>
</div>

<style>
  .node {
    width: 100px;
    height: 65px;
  }
</style>
