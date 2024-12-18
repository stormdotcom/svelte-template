<script>
// @ts-nocheck

  import { onMount } from "svelte";
  // library that creates chart objects in page
  import Chart from "chart.js";
  const labels = ["Auto Post", "XDT", "Master", "CRM BLOG"];
  const serverMetrics = labels.map(() => ({
  cpu: Math.floor(Math.random() * 100),         
  memory: Math.floor(Math.random() * 100),      
  responses: Math.floor(Math.random() * 500),  
  requests: Math.floor(Math.random() * 50),     
}));
const cpuUsage = serverMetrics.map((metric) => metric.cpu);
const memoryUsage = serverMetrics.map((metric) => metric.memory);
const responseCount = serverMetrics.map((metric) => metric.responses);
const activeRequests = serverMetrics.map((metric) => metric.requests);

const datasets = [
  {
    label: "CPU Usage (%)",
    data: cpuUsage,
   
    borderColor: "#ed64a6",
    barThickness: 12,
  },
  {
    label: "Memory Usage (%)",
    data: memoryUsage,
  
    borderColor: "#4c51bf",
    barThickness: 12,
  },
  {
    label: "Response Count",
    data: responseCount,
 
    borderColor: "#48bb78",
    barThickness: 12,
  },
  {
    label: "Active Requests",
    data: activeRequests,
  
    borderColor: "#fbbf24",
    barThickness: 12,
  },
];
  // init chart
  onMount(async () => {
    var config = {
      type: "line",
      data: {
        labels,
        datasets,
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  });
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
>
  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
          Overview
        </h6>
        <h2 class="text-white text-xl font-semibold">
          Server Metrics
        </h2>
      </div>
    </div>
  </div>
  <div class="p-4 flex-auto">
    <!-- Chart -->
    <div class="relative h-350-px">
      <canvas id="line-chart"></canvas>
    </div>
  </div>
</div>
