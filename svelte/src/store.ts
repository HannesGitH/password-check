import { readable, derived, writable } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

const start: Date = new Date();

export const elapsed = derived(time, ($time: Date) =>
  Math.round(($time.valueOf() - start.valueOf()) / 1000)
);
