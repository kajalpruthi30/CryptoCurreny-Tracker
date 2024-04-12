import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, priceType, multiAxis }) {

    const calculateMinMax = () => {
      let minY = Infinity;
      let maxY = -Infinity;
  
      chartData.datasets[1].data.forEach(value => {
        minY = Math.min(minY, value);
        maxY = Math.max(maxY, value);
      });
  
      return { minY, maxY };
    };
  
    const { minY, maxY } = calculateMinMax();


  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + value.toLocaleString();
          },
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + value.toLocaleString();
          },
        },
        suggestedMin: minY, 
        suggestedMax: maxY, 
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
