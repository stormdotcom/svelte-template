<script>
    import Error from "./Error.svelte";


    export let params;
    
    const errorCode = parseInt(new URLSearchParams(window.location.search).get('code') || '500');
    const errorMessage = new URLSearchParams(window.location.search).get('message') || "Something went wrong.";
  </script>
  
  <Error {errorCode} {errorMessage} />
  