import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Citas", "Pacientes", "Hospitales", "Consultas"],
  datasets: [
    {
      label: "Cantidad",
      data: [32, 150, 5, 48],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(34, 197, 94, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function DoughnutChart() {
  return (
    <article className="rounded-2xl shadow-lg p-3 border-2 border-gray-100">
      <Doughnut data={data} />
    </article>
  );
}

export default DoughnutChart;
