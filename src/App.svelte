<script>
  import { cells, best } from "./store";
  import { setContext } from "svelte";
  import Header from "./lib/Header.svelte";
  import Dashboard from "./lib/Dashboard.svelte";
  import Matrix from "./lib/Matrix.svelte";
  import Footer from "./lib/Footer.svelte";
  import { MAX_SIZE } from "./constants";

  let level = 1;
  let score = 0;

  $: cells.init(level);

  function progressLevel() {
    if (level < MAX_SIZE - 1) {
      level++;
    } else {
      best.compareAndUpdate(score)
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

<Header on:playAgain={playAgain} />
<main>
  <Dashboard {level} {score} best={$best} />
  <div>
    <Matrix />
  </div>
</main>
<Footer />

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :global(body) {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      to bottom,
      hsl(220, 50%, 5%),
      hsl(220, 50%, 15%)
    );
  }
  :global(#app) {
    height: 100%;
    gap: 1rem;
    border: 1px solid white;
    box-shadow: inset 0px 0px 20px 0px hsla(0, 0%, 100%, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  div {
    width: 100vw;
    max-height: 70vh;
    padding: 1rem;
  }
</style>
