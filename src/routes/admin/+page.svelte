<script>
    import CardStats from "$lib/components/Cards/CardStats.svelte";


</script>

<!-- Additional Metrics -->
<div class="  md:pt-12 pb-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Daily Traffic"
            statTitle="350K"
            statArrow="up"
            statPercent="5.25"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last day"
            statIconName="fas fa-traffic-light"
            statIconColor="bg-blue-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="System Errors"
            statTitle="32"
            statArrow="down"
            statPercent="8.90"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="fas fa-exclamation-triangle"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Database Queries"
            statTitle="12.9M"
            statArrow="up"
            statPercent="7.12"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="fas fa-database"
            statIconColor="bg-indigo-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="API Latency"
            statTitle="120ms"
            statArrow="down"
            statPercent="1.5"
            statPercentColor="text-orange-500"
            statDescripiron="Compared to average"
            statIconName="fas fa-stopwatch"
            statIconColor="bg-yellow-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>
