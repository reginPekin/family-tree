<script>
  import { onMount } from "svelte";

  let canvas = <HTMLCanvasElement>document.getElementById("tutorial");

  onMount(() => {
    if (!canvas) {
      console.log("no canvas");
      return;
    }

    if (canvas.getContext) {
      console.log("canvas is supported");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.log("no context");
        return;
      }

      ctx.fillStyle = "red";
      ctx.fillRect(30, 30, 50, 50);

      ctx.fillStyle = "white";
      ctx.fillText("Hello world", 10, 50);
    }
  });
</script>

<canvas bind:this={canvas} />

<style>
  canvas {
    height: 150px;
    background-color: bisque;
  }
</style>
