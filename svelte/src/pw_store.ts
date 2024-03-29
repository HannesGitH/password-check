import { readable, derived, writable, Readable, Writable } from "svelte/store";
import zxcvbn from "./zxcvbn";
import { getColorMix } from "./color";

export const password = writable("");

export const security = derived(password, ($password: String) =>
  zxcvbn($password)
);

export const hidden: Writable<boolean> = writable(true);

export const is_empty = derived(
  password,
  ($password: String) => $password.length < 1
);

export const seconds = derived(
  security,
  ($security) =>
    $security.crack_times_seconds.offline_fast_hashing_1e10_per_second
);

export const harderScore = derived(security, ($security) =>
  between(0, Math.floor($security.guesses_log10 / 3) - 3, 5)
);

const getColorFor = (input: number) => {
  const green = "00FF00";
  const red = "FF0000";
  let ratio = between(0, input, 1);
  let color = getColorMix(green, red, ratio);
  return color;
};

export const color = derived([seconds,is_empty], ([$seconds, $is_empty]) =>
  $is_empty ? "323535" : getColorFor(Math.log10(Math.log10($seconds)))
);

export const color_easy = derived(security, ($security) =>
  getColorFor($security.guesses_log10 / 12)
);

const between = (min: number, x: number, max: number) =>
  Math.min(max, Math.max(min, Number.isNaN(x) ? 0 : x));



export const convertScoreToFormat = (score: string) => {
  //regex to remove all non numbers
  let scoreNum = score.replace(/[^0-9]/g, "");

  let scoreText = score.replace(/[0-9 ]/g, "");

  return {scoreNum, scoreText}
};