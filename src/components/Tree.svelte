<script>
  import { getParents, getPersons } from "../api";

  import Node from "./Node.svelte";
</script>

<Node name="Regina" />

{#await getParents()}
  <p>Loading</p>
{:then items}
  {#each items as item}
    <li>{item}</li>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
