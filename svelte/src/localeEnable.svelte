<script>
  export let isGlobal = false;

  function toggleLanguage() {
    isGlobal = !isGlobal;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="toggle" on:click={toggleLanguage}>
  {#if isGlobal}
    <span class="icon global-icon" />
  {:else}
    <span class="icon english-icon" />
  {/if}
</div>

<style>
  .toggle {
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: #e6e6e6;
    border-radius: 50px;
    cursor: pointer;
  }

  .icon {
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .global-icon {
    background-image: url("https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png");
  }

  .english-icon {
    background-image: url("https://cdn-icons-png.flaticon.com/512/1377/1377975.png");
  }
</style>
