import { useEffect } from "react";
import { useGlobalState } from "../store/GlobalState";
import { getSuggestions, sendEmailToPatient } from "../services/querys";

function sendEmail() {
  const { suggestion, profile } = useGlobalState();

  const { setSuggestions } = useGlobalState();
  useEffect(() => {
    getList();
  }, []);

  const enviarCorreo = async (paciente_id) => {
    const res = await sendEmailToPatient(paciente_id, "sugerencia");
    console.log("verificar correo", res.data);
  };

  const getList = async () => {
    const suggestion = await getSuggestions(profile.id);
    setSuggestions(suggestion.data);
  };

  return (
    <div className="mx-auto md:container w-11/12 md:w-10/12 mt-14">
      <h1 className="md:text-3xl text-2xl text-center font-bold mb-4">
        Lista de Sugerencias
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha inicial
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha final
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Cuidado
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {suggestion.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.fecha_inicial}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.fecha_final}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.cuidado}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.descripcion}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {item.paciente_id}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                    onClick={() => enviarCorreo(item.paciente_id)}
                  >
                    Enviar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default sendEmail;
