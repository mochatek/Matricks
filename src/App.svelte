<script>
  import { cells } from "./store";
  import { setContext } from "svelte";
  import Matrix from "./lib/Matrix.svelte";
  let level = 1;
  let score = 0;
  $: cells.init(level);
  function progressLevel() {
    if (level < 5) {
      level++;
    }
  }
  function endLevel() {
    cells.disableCells();
    score += $cells.filter((cell) => !cell.open).length + 1;
    setTimeout(() => progressLevel(), 2000);
  }
  function playAgain() {
    level = 1;
    score = 0;
  }
  setContext("endLevel", endLevel);
</script>

<main>
  <Matrix />
  <h4>SCORE : {score}</h4>
  <button on:click={playAgain}>Play Again!</button>
</main>

<style>
  main {
    height: 50vh;
  }
</style>
