const ctx = document.getElementById("myChart");

const data = [
  { xAxis: "", yAxis: 0 },
  { xAxis: "Q3 21", yAxis: 0 },
  { xAxis: "Q4 21", yAxis: 0.3 },
  { xAxis: "Q1 22", yAxis: 0.6 },
  { xAxis: "Q2 22", yAxis: 0.6 },
  { xAxis: "Q3 22", yAxis: 0.6 },
  { xAxis: "Q4 22", yAxis: 0.6 },
  { xAxis: "Q1 23", yAxis: 0.9 },
  { xAxis: "Q2 23", yAxis: 0.9 },
  { xAxis: "Q3 23", yAxis: 1.6 },
  { xAxis: "Q4 23", yAxis: "" },
];

new Chart(ctx, {
  type: "line",
  data: {
    labels: data.map((row) => row.xAxis),
    datasets: [
      {
        label: "Cashflow History",
        data: data.map((row) => row.yAxis),
        borderWidth: 2,
        borderColor: "rgb(33, 197, 96)",
        fill: true,
        backgroundColor: "rgba(33, 197, 96,0.3)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 2,
        ticks: {
          callback: function (value, index, values) {
            return "$" + value;
          },
          stepSize: 1,
        },
      },
      stacked: "single",
    },
  },
});
