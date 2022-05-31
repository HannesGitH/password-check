<script lang="ts">
  import { password, security } from "./pw_store";
  export let withAsterix: Boolean = false;

  let show_password = false;
  $: type = show_password ? "text" : "password";
  $: cla = show_password ? "fa-eye" : "fa-eye-slash";
	
  function onInput (event) {
    $password = event.target.value
  }

</script>

<div id="input-wrapper">
  <input 
    {type} 
    value={$password} 
    on:input={ onInput } 
    style="
      font-weight: {show_password ? 'normal' : 'bold'}; 
      letter-spacing : {show_password ? '0' : '3px'}
    "
  /> 
  <i class="{cla} fas" on:click={ () => show_password = !show_password } />
</div>

<p>
  it takes
  <b>
    {$security.crack_times_display.offline_fast_hashing_1e10_per_second}
  </b>
  to break your password {withAsterix ? "*" : ""}
</p>

<style>
  #input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  input {
    /* font-size: 16em; */
    /* font: small-caption; */
    /* font-family: Roboto; */
    margin: 0 auto;
    width: 100%;
    outline: none;
    text-align: center;
    border: none;
    border-radius: 15px;
  }

  i {
    font-size: 1.5em;
    cursor: pointer;
    padding: 0.5em;
  }

  /* input:focus {
  } */

  b {
    font-size: large;
    font-weight: bolder;
    text-transform: uppercase;
  }
</style>
