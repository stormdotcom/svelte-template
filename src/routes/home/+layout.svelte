<script>
    import AuthNavbar from '$lib/components/Navbars/AuthNavbar.svelte';
    import Footer from '$lib/components/Footers/Footer.svelte';
    import IndexNavbar from '$lib/components/Navbars/IndexNavbar.svelte';
  </script>
  
  <div>
    <IndexNavbar />
    <slot /> <!-- Render page content here -->
    <Footer />
  </div>
  
