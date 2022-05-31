<script lang="ts">
  import { slide } from "svelte/transition";
  export let thisIsTheFootNote: Boolean = false;

  // import MediaQuery from "./MediaQuery.svelte";

  import { security, harderScore, color_easy } from "./pw_store";

  const scoreStrings = [
    "unthinkably bad",
    "bad",
    "okayish",
    "safe",
    "rediculously secure",
    "uncrackable",
  ];
  const scoreStrings2 = [
    "laugh at",
    "only need",
    "need",
    "baffle at",
    "cry since he faces",
    "be stupid to even try to tackle",
  ];
</script>

<!-- <MediaQuery query="((min-height: 30em) and (min-width: 20em)) or (min-width: 750px)" let:matches> -->
<div id="main">
  <!-- {matches ? "footer" : "normal"}> -->
  {#if thisIsTheFootNote}
    <div transition:slide>
    * <br />
    <c-small>
      Thats assuming an otherwise unprotected offline scenario, where a hacker
      would try around {Number(10000000000).toLocaleString()} passwords per second
      on a normal consumer-grade PC.
    </c-small> <br /><br />
  </div>
  {/if}
  Your password would be {scoreStrings[$harderScore]}, a hacker would {scoreStrings2[
    $harderScore
  ]} an avarage of
  <span id="tries"> {$security.guesses.toLocaleString()} </span><strong
    >tries</strong
  >. <br />
  In a more real-world scenario (like online services) though, this password would
  {scoreStrings[$harderScore] == scoreStrings[$security.score] ? "still" : ""}
  be
  <span id="securityText" style="color: #{$color_easy}"
    >{scoreStrings[$security.score]}</span
  >
  and take
  <span id="securityText" style="color: #{$color_easy}"
    >{$security.crack_times_display.online_no_throttling_10_per_second.toUpperCase()}</span
  > to crack.
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

  #tries {
    font-weight: 700;
    font-size: larger;
  }
</style>
