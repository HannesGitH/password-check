import { derived, Readable } from "svelte/store";
import { security, hidden } from "./pw_store";

export const warning: Readable<string | null> = derived(
  security,
  ($security: any) => {
    let warn = $security.feedback.warning;
    return warn != "" ? warn : null;
  }
);

export const matched_patterns: Readable<string | null> = derived(
  security,
  ($security: any) => {
    $security.sequence;
  }
);

// TODO: if password isnt hidden change warning to show actual problems
//-> 'Repeats like "aaa" are easy to guess' --> 'Repeats like "aaaaa, bcbcbc and ffff" are easy to guess'
