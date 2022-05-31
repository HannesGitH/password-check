<script lang="ts">
  export let name: string;
  import PWBar from "./pw_input.svelte";
  import PWTime from "./pw_time.svelte";
  import Tries from "./tries.svelte";
  import Warn from "./warn.svelte";
  import { elapsed } from "./store";
  import { color, color_easy, seconds, security } from "./pw_store";
  import { slide } from "svelte/transition";
  import { is_empty } from "./pw_store";

  let hasFootNote: Boolean = true;
  let usesOldFootNote: Boolean = false;
</script>

<div id="wrapper">
  <div class="inner">
    <main style="background-color: #{$color};">
      <h1>{name}</h1>
      <PWBar />
      {#if !$is_empty}
        <div transition:slide={{ duration: 100 }} >
          <PWTime withAsterix={hasFootNote} />
          {#if $elapsed > $seconds}<p
              mini
              transition:slide={{ duration: 500, delay: 100}}
            >
              (thats shorter than you've been here)
            </p>
          {/if}
        </div>
      {/if}
    </main>
    {#if !$is_empty}
      {#if hasFootNote && usesOldFootNote}
        <div mini style="padding: 0 10%;">
          * <br />
          If using a normal PC trying around {Number(
            10000000000
          ).toLocaleString()} passwords per second. <br />
          On an online-service it would probably take like
          <div id="securityText" style="color: #{$color_easy}">
            {$security.crack_times_display.online_no_throttling_10_per_second.toUpperCase()}
          </div>
        </div>
      {/if}
      <div id="warn"><Warn /></div>
    {/if}
  </div>
  {#if !$is_empty}
    <div class="inner" id="tries" transition:slide={{ duration: 500 }}>
      <Tries thisIsTheFootNote={hasFootNote && !usesOldFootNote} />
    </div>
  {/if}
</div>

<style lang="scss">
  main {
    /* text-shadow: 0px 1px 0px #000000; */
    text-align: center;
    /* width: 100%; */
    padding: 5%;
    // margin: 5% 0;
    margin-bottom: 2%;
    color: white;
    border-radius: 2em;
    transition: background-color 0.8s ease;
  }
  #warn {
    margin: 1em 0;
    font-size: 0.8em;
  }

  #securityText {
    font-weight: 700;
    font-size: larger;
    text-transform: uppercase;
  }

  [mini] {
    font-size: 12px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: lighter;
    /* font-weight: thin; */
  }

  #wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 5%;
    width: 90%;
    height: 90%;
    > .inner:not(#tries) {
      width: 100%;
      height: 100%;
    }
    > .inner#tries {
      width: 100%;
    }
  }

  @media (max-width: 740px) {
    main {
      max-width: none;
    }
    h1 {
      font-size: 1.5em;
      font-weight: normal;
    }
  }
</style>
