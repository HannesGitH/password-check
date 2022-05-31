<script lang="ts">
  import { warning } from "./warn_store";
</script>

{#if $warning}
  <div>
    <i class="fas fa-exclamation-triangle"/>
    <p>
      {$warning}
    </p>
  </div>
{/if}

<style lang="scss">
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
    i{
        color: #e3c312;
        margin: 0 0.5em;
        font-size: 1.5em;
    }
    p{
        font-size: 1em;
        font-weight: 100;
    }
</style>