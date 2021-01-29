<script lang="typescript">
  import Sidebar from "./Sidebar/Sidebar.svelte";
  import Tree from "./Tree/Tree.svelte";
  import TreeD3 from "./d3tree.svelte";
</script>

<div class="flex h-full">
  <!-- <Sidebar /> -->
  <TreeD3 />
  <Tree />
</div>
