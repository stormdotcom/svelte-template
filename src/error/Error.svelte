<script>
    export let errorCode = 500;
    export let errorMessage = "Something went wrong.";
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-6xl font-bold text-red-500">{errorCode}</h1>
      <h2 class="text-xl font-semibold mt-4 text-gray-800">{errorMessage}</h2>
      <p class="mt-4 text-gray-600">
        Please try refreshing the page or contact support if the problem persists.
      </p>
      <button
        class="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
        on:click={() => window.location.href = '/'}
      >
        Go to Homepage
      </button>
    </div>
  </div>
  
  