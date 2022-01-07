<script  lang="ts" >
    import MediaQuery from "./MediaQuery.svelte";

    import {security, harderScore, color_easy} from './pw_store'

    const scoreStrings = ['unuseably bad','kinda bad', 'okayish', 'safe', 'rediculously secure']
    const scoreStrings2 = ['laugh at','only need', 'need', 'baffle at', 'die before trying']
</script>

<MediaQuery query="(min-height: 30em)" let:matches>
	{#if matches}
	<div id="main"> 
        For an otherwise unprotected offline scenario that's {scoreStrings[$harderScore]}, a hacker would {scoreStrings2[$harderScore]} an avarage of {$security.guesses.toLocaleString()} tries. <br>
        In a real-world scenario though, this password would {scoreStrings[$harderScore]==scoreStrings[$security.score] ? 'still' : ''} be  
        <span id="securityText" style="color: #{$color_easy}">{scoreStrings[$security.score]}</span>
    
</div>
	{/if}
</MediaQuery>


<style>
#main {
    font-weight: 200;
    font-size: small;
    padding: 5%;
    position: fixed;
    bottom: 0;
}

#securityText{
    font-weight: 700;
    font-size: larger;
    text-transform: uppercase;
}
</style>
