<script  lang="ts" >
    import {security} from './pw_store'

    // function getNumberParts(x)
    // {
    //     var float = new Float64Array(1),
    //         bytes = new Uint8Array(float.buffer);

    //     float[0] = x;

    //     var sign = bytes[7] >> 7,
    //         exponent = ((bytes[7] & 0x7f) << 4 | bytes[6] >> 4) - 0x3ff;

    //     bytes[7] = 0x3f;
    //     bytes[6] |= 0xf0;

    //     return {
    //         sign: sign,
    //         exponent: exponent,
    //         mantissa: float[0],
    //     }
    // }
</script>

<div>
	<p>that's an avarage of {$security.guesses} tries</p>
</div>

<style>
div {
    padding-top: 5%;
 margin: auto;
 width: 80%;
 text-align: center;
}
</style>
