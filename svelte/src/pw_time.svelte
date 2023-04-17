<script lang="ts">
  import { _ } from "svelte-i18n";
  import { security } from "./pw_store";
  export let withAsterisk: Boolean = false;
</script>

<p>
  {@html $_("time_taken", {
    values: {
      time: $security.crack_times_display.offline_fast_hashing_1e10_per_second,
      asterisk: withAsterisk ? "*" : "",
    },
  })}
  <!-- it takes
  <b>
    {$security.crack_times_display.offline_fast_hashing_1e10_per_second}
  </b>
  to break your password {withAsterisk ? "*" : ""} -->
</p>

<style>
  p > :global(b) {
    font-size: large;
    font-weight: bolder;
    text-transform: uppercase;
  }
</style>
