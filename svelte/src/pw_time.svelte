<script lang="ts">
  import { security } from "./pw_store";
  export let withAsterix: Boolean = false;
</script>

<p>
  it takes
  <b>
    {$security.crack_times_display.offline_fast_hashing_1e10_per_second}
  </b>
  to break your password {withAsterix ? "*" : ""}
</p>

<style>
  b {
    font-size: large;
    font-weight: bolder;
    text-transform: uppercase;
  }
</style>
