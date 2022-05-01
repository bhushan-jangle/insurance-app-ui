import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total premium buy in given months",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Premium",
      data: [100, 300, 200, 100, 500, 900, 200, 100, 300, 200, 100, 200],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Chart(props) {
  function calculateTotalPremium() {
    const premiumDates = props.insuranceData.map(
      (item) => item.Date_of_Purchase.split("/")[0]
    );
    console.log(premiumDates);

    let map = premiumDates.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    let res = Object.values(map);
    data.datasets[0].data = res;
    console.log("map", res);
  }
  calculateTotalPremium();
  return (
    <div className="form-body">
      <Bar options={options} data={data} />
    </div>
  );
}

export default Chart;
