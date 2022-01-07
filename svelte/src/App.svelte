<script lang="ts">
	export let name: string;
	import PWBar from './pw.svelte'
	import Tries from './tries.svelte'
	import {elapsed} from './store'
	import {color, color_easy, seconds, security} from './pw_store'
	import { slide } from 'svelte/transition';

	let hasFootNote:Boolean = true;
</script>

<main 
	style="background-color: #{$color};"
>
	<h1>{name}</h1>
	<PWBar withAsterix={hasFootNote}/>
	{#if $elapsed>$seconds }<p mini transition:slide="{{ duration: 1000 }}" >(thats shorter than you've been here)</p> {/if}
</main>
{#if hasFootNote}
<div mini style="padding: 0 10%;">
	* <br>
	If using a normal PC trying around {Number(10000000000).toLocaleString()} passwords per second. <br>
	On an online-service it would probably take like 
	<div id="securityText" style="color: #{$color_easy}"> {$security.crack_times_display.online_no_throttling_10_per_second.toUpperCase()}</div>
	

</div>
{/if}

<Tries></Tries>

<style>
	main {
		/* text-shadow: 0px 1px 0px #000000; */
		text-align: center;
		padding: 5%;
		margin: 5% ;
		margin-bottom: 2%;
		color: white;
		border-radius: 2em;
		transition: background-color 0.8s ease;
	}

	#securityText{
    font-weight: 700;
    font-size: larger;
    text-transform: uppercase;
}

	[mini]{
		font-size: 11px;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (max-width: 740px) {
		main {
			max-width: none;
		}
		h1 {
			font-size: 1.5em;
		}
	}
</style>