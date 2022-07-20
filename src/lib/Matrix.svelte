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
    grid-template-rows: repeat(var(--size), 1fr);
    grid-template-columns: repeat(var(--size), 1fr);
    height: 100%;
    gap: 0.1rem;
    padding: 0 0.1rem;
  }
</style>
