<script>
  import { onMount } from "svelte";
  import Node from "./Node.svelte";

  import { addPersonFx } from "../stores/persons/effects";

  import { persons, me } from "../stores/persons";
  import { parents } from "../stores/parents";
  import { getPersonsFx } from "../stores/persons/effects";

  import { Tree, Parents, Person } from "../classes";

  onMount(() => {
    getPersonsFx();

    // const familyTree = new Tree($me);
  });

  console.log($persons, "persons");
  console.log($parents, "parents");
</script>

{#if $persons.length}
  {#each $persons as person}
    <Node
      name={person.name}
      gender={person.gender}
      parentsId={person.parents}
    />
  {/each}
{:else}
  <p
    on:click={() => {
      addPersonFx({ name: "me", gender: "female" });
    }}
  >
    Create new
  </p>
{/if}
