<script>
  export let name = "";
  export let gender: "male" | "female" = "female";

  const isFemale = gender === "female";
  const femaleClasses = "bg-red-400 border-red-600";
  const maleClasses = "bg-blue-400 border-blue-600";
</script>

<div
  class="{isFemale
    ? femaleClasses
    : maleClasses} absolute rounded-md border shadow-md flex 
    break-normal justify-center items-center text-yellow-50 node"
>
  <span class="h-min">{name}</span>
</div>

<style>
  .node {
    width: 77px;
    height: 38px;
  }
</style>
