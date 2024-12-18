<script>
  // @ts-nocheck
    import { createPopper } from "@popperjs/core";
    import '../../../app.css'; // adjust as needed based on your folder depth
  
    const image = "/assets/img/ajmal.jpg";
  
    let dropdownPopoverShow = false;
    let btnDropdownRef;
    let popoverDropdownRef;
  
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
    <button
      class="text-slate-500 block"
      aria-label="Toggle dropdown"
      bind:this={btnDropdownRef}
      on:click={toggleDropdown}
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="Profile"
            class="w-full rounded-full align-middle border-none shadow-lg"
            src={image}
          />
        </span>
      </div>
    </button>
    <div
      bind:this={popoverDropdownRef}
      class={`bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 ${dropdownPopoverShow ? 'block' : 'hidden'}`}
    >
      <button
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        aria-label="Perform Action"
        on:click={(e) => e.preventDefault()}
      >
        Action
      </button>
      <button
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        aria-label="Perform Another Action"
        on:click={(e) => e.preventDefault()}
      >
        Another action
      </button>
      <button
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        aria-label="Perform Something Else"
        on:click={(e) => e.preventDefault()}
      >
        Something else here
      </button>
      <div class="h-0 my-2 border border-solid border-slate-100"></div>
      <button
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        aria-label="Perform Separated Link Action"
        on:click={(e) => e.preventDefault()}
      >
        Separated link
      </button>
    </div>
  </div>
  