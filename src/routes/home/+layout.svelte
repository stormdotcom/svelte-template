<script>
  import Footer from '$lib/components/Footers/Footer.svelte';
  import IndexNavbar from '$lib/components/Navbars/IndexNavbar.svelte';
</script>

<div>
<!-- Navbar -->
<IndexNavbar />

<!-- Content slot for child components -->
<slot />

<!-- Footer -->
<Footer />
</div>
