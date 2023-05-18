import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Pacientes",
      data: labels.map(() => faker.datatype.number({ min: 50, max: 200 })),
      borderColor: "rgb(55, 162, 235)",
      backgroundColor: "rgba(55, 162, 235, 0.5)",
    },

    {
      label: "Hospitales",
      data: [5, 5, 5, 5, 5, 5, 5],
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
    {
      label: "Consultas",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 100 })),
      borderColor: "rgb(34, 197, 94)",
      backgroundColor: "rgba(34, 197, 94, 0.5)",
    },
    {
      label: "Citas",
      data: labels.map(() => faker.datatype.number({ min: 10, max: 70 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function LineChart() {
  return (
    <article className="rounded-2xl shadow-lg p-3 flex items-center border-2 border-gray-100">
      <Line options={options} data={data} />
    </article>
  );
}

export default LineChart;
