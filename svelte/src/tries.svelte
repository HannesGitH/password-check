<script  lang="ts" >
    import {security, harderScore, color_easy} from './pw_store'

    const scoreStrings = ['unuseably bad','kinda bad', 'okayish', 'safe', 'rediculously secure']
    const scoreStrings2 = ['laugh at','only need', 'need', 'baffle at', 'die before trying']
</script>

<div id="main"> 
        for an otherwise unprotected offline scenario that's {scoreStrings[$harderScore]}, a hacker would {scoreStrings2[$harderScore]} an avarage of {$security.guesses} tries. <br>
        In a real-world scenario though, this password would {scoreStrings[$harderScore]==scoreStrings[$security.score] ? 'still' : ''} be  
        <span id="securityText" style="color: #{$color_easy}">{scoreStrings[$security.score]}</span>
    
</div>

<style>
#main {
    font-weight: 200;
    padding-top: 5%;
 margin: auto;
 width: 80%;
 text-align: center;
}

#securityText{
    font-weight: 700;
    font-size: larger;
    text-transform: uppercase;
}
</style>
