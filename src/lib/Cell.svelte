<script>
  import { cells } from "../store.js";
  import { getContext } from "svelte";
  import Treasure from "../assets/treasure.gif";

  export let index, open, isTarget, enabled;

  const hue = Math.floor(Math.random() * 360);
  const endLevel = getContext("endLevel");

  function selectCell() {
    if (enabled) {
      cells.openCell(index);
      if (isTarget) {
        endLevel();
      }
    }
  }
</script>

<div class:open on:click={selectCell} style="--hue: {hue}">
  {#if isTarget && open}
    <img alt="Treasure" src={`${Treasure}?time=${Date.now()}`} />
  {/if}
</div>

<style>
  div {
    border: 2px solid white;
    background: linear-gradient(
      to bottom right,
      hsla(var(--hue), 40%, 45%, 0.8),
      hsla(calc(var(--hue) - 60), 40%, 50%, 0.8)
    );
    box-shadow: -1px -1px 8px 0px hsl(calc(var(--hue) + 25), 80%, 45%),
      1px 1px 8px 0px hsl(calc(var(--hue) - 55), 80%, 50%),
      inset 1px 1px 4px 1px hsl(calc(var(--hue) + 25), 80%, 45%),
      inset -1px -1px 4px 1px hsl(calc(var(--hue) - 55), 80%, 50%);
    position: relative;
    border-radius: 4px;
  }
  div::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    z-index: 10;
    background: linear-gradient(
      to right,
      hsl(var(--hue), 20%, 45%),
      hsl(calc(var(--hue) - 60), 20%, 50%)
    );
    border-right: 1px solid white;
  }
  div::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: 10;
    background: linear-gradient(
      to right,
      hsl(calc(var(--hue) - 60), 20%, 50%),
      hsl(var(--hue), 20%, 45%)
    );
    border-left: 1px solid white;
  }
  div.open::before,
  div.open::after {
    animation: open 0.6s ease-out 0s forwards;
  }
  @keyframes open {
    99% {
      height: 100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    filter: drop-shadow(15px 0px 30px #fff494);
  }
</style>
