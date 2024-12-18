<script>
  import '../../app.css';
  import '@fortawesome/fontawesome-free/css/all.css';

  import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
  import AdminNavbar from '$lib/components/Navbars/AdminNavbar.svelte';
  import HeaderStats from '$lib/components/Headers/HeaderStats.svelte';
  import FooterAdmin from '$lib/components/Footers/FooterAdmin.svelte';
</script>

<div>
<!-- Sidebar (optional) -->
<Sidebar />

<!-- Main Content -->
<div class="flex-1 md:ml-64">
  <AdminNavbar />
  <HeaderStats />
  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <!-- Scrollable Content -->
    <div
      class="p-4 rounded bg-white shadow-inner"
      style="scrollbar-gutter: stable;"
    >
      <slot />
    </div>
  </div>
</div>

<!-- Footer -->

</div>
<FooterAdmin />
