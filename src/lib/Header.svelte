<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function initiatePlayAgain() {
    dispatch("playAgain");
  }
</script>

<header>
  <div>
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#fff" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#000" fill-rule="nonzero">
          <path
            d="M10.75,15 C11.9926407,15 13,16.0073593 13,17.25 L13,22.75 C13,23.9926407 11.9926407,25 10.75,25 L5.25,25 C4.00735931,25 3,23.9926407 3,22.75 L3,17.25 C3,16.0073593 4.00735931,15 5.25,15 L10.75,15 Z M22.75,15 C23.9926407,15 25,16.0073593 25,17.25 L25,22.75 C25,23.9926407 23.9926407,25 22.75,25 L17.25,25 C16.0073593,25 15,23.9926407 15,22.75 L15,17.25 C15,16.0073593 16.0073593,15 17.25,15 L22.75,15 Z M10.75,3 C11.9926407,3 13,4.00735931 13,5.25 L13,10.75 C13,11.9926407 11.9926407,13 10.75,13 L5.25,13 C4.00735931,13 3,11.9926407 3,10.75 L3,5.25 C3,4.00735931 4.00735931,3 5.25,3 L10.75,3 Z M22.75,3 C23.9926407,3 25,4.00735931 25,5.25 L25,10.75 C25,11.9926407 23.9926407,13 22.75,13 L17.25,13 C16.0073593,13 15,11.9926407 15,10.75 L15,5.25 C15,4.00735931 16.0073593,3 17.25,3 L22.75,3 Z"
          />
        </g>
      </g>
    </svg>
    <span>Matricks</span>
  </div>
  <button on:click={initiatePlayAgain}>▶</button>
</header>

<style>
  @font-face {
    font-family: "Bugebol huomenna";
    font-style: normal;
    font-weight: 400;
    src: url("../../public/Bugebol huomenna.woff") format("woff");
  }
  header {
    width: 100%;
    background-color: hsla(0, 0%, 100%, 0.25);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: inset 0px 1px 10px 0px hsla(0, 0%, 100%, 0.75),
      0px 1px 10px 0px hsla(0, 0%, 100%, 0.75);
  }
  button {
    outline: none;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.25em 1em;
    font-weight: 900;
    font-size: medium;
    color: white;
    background: linear-gradient(to bottom right, green, lime);
    box-shadow: inset 0px 0px 8px 0px green, 0px 0px 8px 0px lime;
  }
  button:hover {
    background: linear-gradient(to bottom right, lime, green);
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  span {
    background-color: transparent;
    text-shadow: 1px 1px hsla(0, 0%, 0%, 0.9);
    font: 28px "Bugebol huomenna", sans-serif;
  }
  svg {
    filter: drop-shadow(0px 0px 8px hsla(0, 0%, 0%, 0.8));
  }
</style>
