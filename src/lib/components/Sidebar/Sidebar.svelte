<script>
// @ts-nocheck

  import { PUBLIC_PROJECT_NAME } from '$env/static/public';
  import { goto } from '$app/navigation'; // SvelteKit navigation function

  let collapseShow = "hidden";
  let projectName = PUBLIC_PROJECT_NAME || "My Project"; // Use the public project name or default
  function toggleCollapseShow(classes) {
    // Toggle between 'hidden' and the provided classes
    collapseShow = collapseShow === "hidden" ? classes : "hidden";
  }
  import { page } from '$app/stores';
  // Menu Items for Iteration
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "fas fa-tv" },
    { name: "Portfolio Analytics", href: "/portfolio", icon: "fas fa-chart-bar" },
    { name: "Logger", href: "/logger", icon: "fas fa-list" },
    { name: "Settings", href: "/settings", icon: "fas fa-tools" },
  ];


</script>

<nav
  class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
  <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
    <!-- Toggler -->
    <button
      class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      aria-expanded={collapseShow !== 'hidden'}
      aria-controls="navbar-collapse"
      on:click={() => toggleCollapseShow('bg-white m-2 py-3 px-6')}
    >
      <i class="fas fa-bars">Collapse</i>
    </button>

    <!-- Brand -->
    <a
      class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      href="/"
    >
      {projectName}
    </a>

    <!-- Menu -->
    <ul id="navbar-collapse" class="md:flex-col md:min-w-full flex flex-col list-none">
      {#each menuItems as item}
        <li class="items-center">
          <a
            href={item.href}
            on:click={(e) => {
              e.preventDefault();
              goto(item.href);
            }}
            role="link"
            class="cursor-pointer text-xs uppercase py-3 font-bold block 
              {$page.url.pathname.includes(item.href) 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="{item.icon} mr-2 text-sm 
                {$page.url.pathname.includes(item.href) 
                  ? 'opacity-75' 
                  : 'text-blueGray-300'}"
            ></i>
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
