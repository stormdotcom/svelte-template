<script>
  import { createPopper } from "@popperjs/core";

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  // Toggle the dropdown visibility
  const toggleDropdown = (event) => {
    event.preventDefault();
    dropdownPopoverShow = !dropdownPopoverShow;

    if (dropdownPopoverShow) {
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div>
  <!-- Dropdown Trigger -->
  <a
    class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
    href="#"
    bind:this={btnDropdownRef}
    on:click={toggleDropdown}
  >
    Demo Pages
  </a>

  <!-- Dropdown Menu -->
  <div
    bind:this={popoverDropdownRef}
    class={`bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 ${
      dropdownPopoverShow ? "block" : "hidden"
    }`}
  >
    <!-- Admin Layout Links -->
    <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">
      Admin Layout
    </span>
    <a
      href="/admin/dashboard"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Dashboard
    </a>
    <a
      href="/admin/settings"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Settings
    </a>
    <a
      href="/admin/tables"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Tables
    </a>
    <a
      href="/admin/maps"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Maps
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-slate-100"></div>

    <!-- Auth Layout Links -->
    <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">
      Auth Layout
    </span>
    <a
      href="/auth/login"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Login
    </a>
    <a
      href="/auth/register"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Register
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-slate-100"></div>

    <!-- No Layout Links -->
    <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400">
      No Layout
    </span>
    <a
      href="/landing"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Landing
    </a>
    <a
      href="/profile"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
    >
      Profile
    </a>
  </div>
</div>
