<script>
    import CardBarChart from "$lib/components/Cards/CardBarChart.svelte";
    import CardLineChart from "$lib/components/Cards/CardLineChart.svelte";
    import CardPageVisits from "$lib/components/Cards/CardPageVisits.svelte";
    import CardSocialTraffic from "$lib/components/Cards/CardSocialTraffic.svelte";
    import TableComponent from "$lib/components/Table/TableComponent.svelte";
    const headers = ["Applications", "Visitors", "Unique Users", "Bounce Rate"];
    const data = [
    ["/argon/", "4,569", "340", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i>46,53%'],
    ["/argon/index.html", "3,985", "319", '<i class="fas fa-arrow-down text-orange-500 mr-4"></i>46,53%'],
    ["/argon/charts.html", "3,513", "294", '<i class="fas fa-arrow-down text-orange-500 mr-4"></i>36,49%'],
    ["/argon/tables.html", "2,050", "147", '<i class="fas fa-arrow-up text-emerald-500 mr-4"></i>50,87%'],
    ["/argon/profile.html", "1,795", "190", '<i class="fas fa-arrow-down text-red-500 mr-4"></i>46,53%'],
  ];
  const handleButtonClick = () => {
    console.log("See all clicked");
  };

  </script>
  
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardLineChart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardBarChart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <TableComponent headers={headers} data={data} />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardSocialTraffic />
      </div>
    </div>
  </div>
  