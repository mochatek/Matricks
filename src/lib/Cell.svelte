<script>
  import { cells } from "../store.js";
  import { getContext } from "svelte";
  export let index, open, isTarget, enabled;

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

<div class:open on:click={selectCell}>
  {#if isTarget}
    <span />
  {/if}
</div>

<style>
  div {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
    box-shadow: inset 0 0 20px 2px grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    z-index: 10;
    background: linear-gradient(to right, rgb(122, 22, 22), red);
    border-right: 1px solid black;
  }
  div::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: 10;
    background: linear-gradient(to right, red, rgb(122, 22, 22));
    border-left: 1px solid black;
  }
  div.open::before,
  div.open::after {
    animation: open 0.75s ease-out 0s forwards;
  }
  span {
    width: 25px;
    height: 25px;
    background-color: blue;
    border-radius: 50%;
  }
  @keyframes open {
    100% {
      width: 0;
    }
  }
</style>
