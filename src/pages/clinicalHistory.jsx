import { useGlobalState } from "../store/GlobalState";
import { useEffect, useState } from "react";
import { getFamily } from "../services/querys";

import React from "react";

function clinicalHistory() {
  useEffect(() => {
    clinicalsHistorys();
  }, []);

  const { profile } = useGlobalState();

  const [historys, setHistorys] = useState([]);

  const historiasClinicas = [
    {
      nombre: "Ana",
      apellido: "Rodríguez",
      cedula: "12345678",
      edad: 35,
      fecha: "20 de mayo de 2023",
      motivoConsulta: "Dolor abdominal",
      doctor: "Dr. López",
    },
    {
      nombre: "Ana",
      apellido: "Rodríguez",
      cedula: "12345678",
      edad: 35,
      fecha: "10 de mayo de 2023",
      motivoConsulta: "Dolor abdominal",
      doctor: "Dr. López",
    },
  ];

  const clinicalsHistorys = async () => {
    const res = await getFamily(profile.id);
    console.log(res.data);
    setHistorys(res.data);
  };

  const descargarPDF = () => {
    // Petición al backend para descargar el PDF
  };

  return (
    <div className="mx-auto md:container w-11/12 mt-14">
      <h1 className="md:text-3xl text-2xl text-center font-bold mb-4">
        Historias Clínicas
      </h1>
      <div className="text-end mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={descargarPDF}
        >
          Descargar PDF
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Apellido
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Cédula
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Edad
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Motivo de consulta
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {historys.map((item) => (
              <tr key={item.fecha} className="hover:bg-gray-100">
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.nombre}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.apellido}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.cedula}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.edad}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.fecha}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.motivoConsulta}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.doctor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default clinicalHistory;
