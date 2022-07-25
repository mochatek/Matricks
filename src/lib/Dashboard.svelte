<script>
  export let level;
  export let score;
  export let best;
</script>

<section>
  <div>LEVEL<span>{level}</span></div>
  <div>SCORE<span>{score}</span></div>
  <div>BEST<span>{best}</span></div>
</section>

<style>
  section {
    display: flex;
    gap: 1rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font: bold 10px Tahoma;
    background-color: white;
    color: red;
    padding-top: 0.15rem;
    border-radius: 4px;
    border: 1px solid white;
    box-shadow: 0px 0px 6px 0px hsla(0, 0%, 100%, 0.35);
  }
  span {
    background: hsl(220, 50%, 5%);
    color: white;
    width: 100%;
    margin-top: 0.15rem;
    padding: 0.25rem 1rem;
    text-align: center;
    border-radius: 0px 0px 4px 4px;
    font: 16px monospace;
  }
</style>
