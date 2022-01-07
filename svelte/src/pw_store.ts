import { readable, derived, writable } from 'svelte/store';
import zxcvbn from './zxcvbn'
import { getColorMix } from './color'

export const password = writable('');

export const security = derived(
    password,
	($password:String)=> zxcvbn($password)
);

export const seconds = derived(
    security,
	$security=>$security.crack_times_seconds.offline_fast_hashing_1e10_per_second
);

export const harderScore = derived(
    security,
	$security=>Math.min(Math.round($security.guesses_log10/4),5)
);

const getColorFor = (input:number)=>{
    const green = "00FF00" 
    const red   = "FF0000" 
    let ratio = between(0,input,1);
    let color = getColorMix(green, red, ratio);
    return color
}

export const color = derived(
    seconds,
	$seconds=> getColorFor(Math.log10(Math.log10($seconds)))
);

export const color_easy = derived(
    security,
	$security=> getColorFor($security.guesses_log10/12)
);

const between=(min:number,x:number,max:number)=>
    Math.min(max,
        Math.max(min,
            Number.isNaN(x)?0:x
        )
    )
