import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
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
      text: "Estadisticas",
    },
  },
};

const labels = ["Citas", "Pacientes", "Hospitales", "Consultas"];

export const data = {
  labels,
  datasets: [
    {
      label: "1",
      data: [32, 150, 5, 48],
      backgroundColor: ["rgba(255, 99, 132, 0.5)"],
    },
    {
      label: "2",
      data: [42, 120, 5, 30],
      backgroundColor: ["rgba(54, 162, 235, 0.5)"],
    },
  ],
};

function VerticalBarChart() {
  return (
    <article className="rounded-2xl shadow-lg py-0 p-3 flex items-center border-2 border-gray-100">
      <Bar options={options} data={data} />
    </article>
  );
}

export default VerticalBarChart;
