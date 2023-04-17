<script lang="ts">
  import { _ } from "svelte-i18n";
  import { slide } from "svelte/transition";
  export let thisIsTheFootNote: Boolean = false;

  // import MediaQuery from "./MediaQuery.svelte";

  import { security, harderScore, color_easy } from "./pw_store";
</script>

<!-- <MediaQuery query="((min-height: 30em) and (min-width: 20em)) or (min-width: 750px)" let:matches> -->
<div id="main">
  <!-- {matches ? "footer" : "normal"}> -->
  {#if thisIsTheFootNote}
    <div transition:slide>
      * <br />
      <c-small>
        {$_("hps_note", {
          values: { hps: Number(10000000000).toLocaleString() },
        })}
      </c-small> <br /><br />
    </div>
  {/if}
  {@html $_("tries_note", {
    values: {
      harderScore: $harderScore,
      tries: $security.guesses.toLocaleString()
    },
  })}
  <br />
  {$_("real_world.note_prefix", {
  values: { still: $harderScore == $security.score ? 1 : 0}})}
  <span id="securityText" style="color: #{$color_easy}"
    >{$_("real_world.score", {values:{score: $security.score}})}</span
  >
  {$_("real_world.glue")}
  <span id="securityText" style="color: #{$color_easy}"
    >{$security.crack_times_display.online_no_throttling_10_per_second.toUpperCase()}</span
  > {$_("real_world.suffix")}
</div>

<!-- </MediaQuery> -->
<style>
  #main {
    font-weight: 200;
    font-size: 12px;
    /* font-size: small; */
    /* padding: 5%; */
  }

  c-small {
    font-size: 12px;
    font-weight: 200;
    opacity: 0.5;
  }
  /* #main.footer {
    position: fixed;
    bottom: 0;
  } */

  #securityText {
    font-weight: 700;
    font-size: larger;
    text-transform: uppercase;
  }

  #main :global(#tries) {
    font-weight: 700;
    font-size: larger;
  }
</style>
