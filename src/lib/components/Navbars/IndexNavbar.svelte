<script>
  import { PUBLIC_PROJECT_NAME } from "$env/static/public";
  import IndexDropdown from "../Dropdowns/IndexDropdown.svelte";

  // State to toggle navbar visibility on small screens
  let navbarOpen = false;

  // Toggle navbar visibility
  const setNavbarOpen = () => {
    navbarOpen = !navbarOpen;
  };
</script>

<nav
  class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
>
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <!-- Brand Section -->
    <div class="flex items-center">
      <!-- Logo (optional) -->
      <img src="/path-to-your-logo.png" alt="Logo" class="h-8 mr-2" /> 

      <!-- Brand Name -->
      <h1 class="text-slate-700 text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase">
        {PUBLIC_PROJECT_NAME}
      </h1>
    </div>

    <!-- Navbar Toggler -->
    <div class="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click="{setNavbarOpen}"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Navbar Content -->
    <div
      class={`lg:flex flex-grow items-center ${
        navbarOpen ? "block" : "hidden"
      }`}
      id="example-navbar-warning"
    >
      <!-- Right Menu -->
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <!-- Read Docs -->
        <li class="flex items-center">
          <a
            href="/docs" 
            class="text-xs uppercase font-bold px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-150 ease-in-out flex items-center"
          >
            <i class="fas fa-book mr-2 text-grey-500"></i> Read Docs
          </a>
        </li>
        <IndexDropdown />
        <!-- Login Button -->
        <li class="flex items-center">
          <button
            class="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
          >
            <i class="fas fa-sign-in-alt mr-2"></i> Login
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
