<script lang="ts">
  import { _, getLocaleFromNavigator, locale } from "svelte-i18n";
  export let name: string;
  import PWBar from "./pw_input.svelte";
  import PWTime from "./pw_time.svelte";
  import Tries from "./tries.svelte";
  import Warn from "./warn.svelte";
  import LocaleEnable from "./localeEnable.svelte";
  import { elapsed } from "./store";
  import { color, color_easy, seconds, security } from "./pw_store";
  import { slide, fade } from "svelte/transition";
  import { is_empty } from "./pw_store";
  import MediaQuery from "./MediaQuery.svelte";

  let hasFootNote: Boolean = true;

  let screenWidth: number;
  let screenHeight: number;

  let isGlobal: boolean = false;
  $: isGlobal ? locale.set(getLocaleFromNavigator()) : locale.set("en");

  $: _extraheight = screenWidth > 740 ? 100 : 0;
  $: showHeadline = screenHeight > 250 + _extraheight;
  $: showAsterisk = hasFootNote && screenHeight > 400 + _extraheight;
  $: showResult = screenHeight > 150 + _extraheight;
  $: showExtra = screenHeight > 390 + _extraheight;
  $: showOnline = screenHeight > 350 + _extraheight;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

{#if !getLocaleFromNavigator().startsWith("en")}
  <LocaleEnable bind:isGlobal />
{/if}

<div id="wrapper">
  <!-- ((min-height: 12em) or ((min-width: 740px) and (min-height: 20em))) -->
  <div class="inner">
    <main style="background-color: #{$color};">
      {#if showHeadline}
        <h1 transition:slide={{ duration: 200 }}>
          {$_("name", { default: name })}
        </h1>
      {/if}
      <PWBar />
      {#if !$is_empty && showResult}
        <div transition:slide={{ duration: 100 }}>
          <PWTime withAsterisk={showAsterisk} />
          {#if $elapsed > $seconds && showExtra}<p
              mini
              transition:slide={{ duration: 500, delay: 100 }}
            >
              {$_("less_than_app_open_extra")}
            </p>
          {/if}
        </div>
      {/if}
    </main>
    {#if !$is_empty}
      <div id="warn"><Warn /></div>
    {/if}
  </div>
  {#if !$is_empty && showOnline}
    <div class="inner" id="tries" transition:fade={{ duration: 500 }}>
      <Tries thisIsTheFootNote={showAsterisk} />
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
    min-height: 90%;
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

  @media (max-width: 500px) {
    main {
      padding: 1em;
    }
    h1 {
      font-size: 1.2em;
    }
  }
</style>
