<script>
    import CardStats from "$lib/components/Cards/CardStats.svelte";
    import TableComponent from "$lib/components/Table/TableComponent.svelte";

    const headers = ["Route", "Clients", "Visitors", "Unique Users", "Bounce Rate"];

  // Data for the table
  const data = [
    ["/home", "Web", "5,000", "1,200", '<i class="fas fa-arrow-down text-orange-500 mr-4"></i> 45.10%'],
    ["/dashboard", "Mobile", "2,450", "950", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 30.87%'],
    ["/profile", "Web", "1,300", "620", '<i class="fas fa-arrow-down text-orange-500 mr-4"></i> 56.32%'],
    ["/settings", "API", "800", "400", '<i class="fas fa-arrow-down text-red-500 mr-4"></i> 70.15%'],
    ["/analytics", "Web", "4,200", "1,100", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 40.25%'],
    ["/contact", "Mobile", "900", "350", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 20.18%'],
    ["/about", "Web", "2,800", "900", '<i class="fas fa-arrow-down text-orange-500 mr-4"></i> 50.75%'],
    ["/docs", "API", "3,100", "1,400", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i> 35.20%'],
  ];
  const handleButtonClick = () => {
    console.log("See all clicked");
  };
</script>

<!-- Additional Metrics -->
<div class="relative  md:pt-12 pb-12">
  
<TableComponent
    title="Deployments"
    headers={headers}
    data={data}
    buttonText="See all"
    onButtonClick={handleButtonClick}
/>
</div>
