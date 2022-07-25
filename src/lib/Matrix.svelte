<script>
  import { cells } from "../store.js";
  import Cell from "./Cell.svelte";
</script>

<section style="--size:{Math.sqrt($cells.length)}">
  {#each $cells as cell}
    <Cell {...cell} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(var(--size), 1fr);
    max-height: 100%;
    aspect-ratio: 1;
    margin: auto;
    gap: 0.5rem;
  }
</style>
