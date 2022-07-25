import { writable, get } from "svelte/store";
import { MAX_SIZE, LOCAL_STORAGE_KEY } from "./constants.js";

function createCells() {
  function initializeCells(level) {
    const size = MAX_SIZE - level;
    const treasureRow = 1 + Math.floor(Math.random() * size);
    const treasureCol = 1 + Math.floor(Math.random() * size);

    const _cells = [];
    let index = 0;
    for (let row = 1; row <= size; row++) {
      for (let col = 1; col <= size; col++) {
        const isTarget = treasureRow == row && treasureCol == col;
        _cells.push({ index, open: false, isTarget, enabled: true });
        index++;
      }
    }
    return _cells;
  }
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    init: (size) => set(initializeCells(size)),
    openCell: (index) =>
      update((_) =>
        _.map((cell, idx) => (idx == index ? { ...cell, open: true } : cell))
      ),
    disableCells: () =>
      update((_) => _.map((cell) => ({ ...cell, enabled: false }))),
  };
}

function createBest() {
  const bestScore = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (bestScore === null) {
    localStorage.setItem(LOCAL_STORAGE_KEY, "0");
  }

  const best = writable(+bestScore);

  const compareAndUpdate = (newScore) => {
    if (get(best) < newScore) {
      best.set(newScore);
      localStorage.setItem(LOCAL_STORAGE_KEY, `${newScore}`);
    }
  };

  return {
    subscribe: best.subscribe,
    compareAndUpdate,
  };
}

export const cells = createCells();
export const best = createBest();
