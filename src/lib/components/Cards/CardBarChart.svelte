<script>
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
      backgroundColor: "#ed64a6", // Pink
      borderColor: "#ed64a6",
      borderWidth: 1,
      barThickness: 12,
    },
    {
      label: "Memory Usage (%)",
      data: memoryUsage,
      backgroundColor: "#4c51bf", // Blue
      borderColor: "#4c51bf",
      borderWidth: 1,
      barThickness: 12,
    },
  ];
  // init chart
  onMount(async () => {
    let config = {
      type: "bar",
      data: {
        labels,
        datasets
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  });
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
>
  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h6 class="uppercase text-slate-400 mb-1 text-xs font-semibold">
          Performance
        </h6>
        <h2 class="text-slate-700 text-xl font-semibold">
          Application Sever
        </h2>
      </div>
    </div>
  </div>
  <div class="p-4 flex-auto">
    <div class="relative h-350-px">
      <canvas id="bar-chart"></canvas>
    </div>
  </div>
</div>
