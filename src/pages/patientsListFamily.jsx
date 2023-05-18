import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../store/GlobalState";
import { getFamily } from "../services/querys";

function patientsListFamily() {
  //atributos
  const { profile, family } = useGlobalState();
  //funciones
  const { setPatient } = useGlobalState();
  useEffect(() => {
    getFamilyAsync();
  }, []);

  const getFamilyAsync = async () => {
    await getFamily(profile.id);
  };

  const navigate = useNavigate();

  const handleSignals = (patient) => {
    //realizar peticion get al backend para obtener la sugerencia y asignarla a la variable suggestion
    setPatient(patient);
    navigate("/signals-vitals");
  };

  return (
    <div className="mx-auto md:container w-11/12 mt-14">
      <h1 className="md:text-3xl text-2xl text-center font-bold mb-4">
        Pacientes de {profile.name}
      </h1>
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
                Dirección
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Correo
              </th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {family.map((patient, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.nombre}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.apellido}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.cedula}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.edad}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.direccion}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {patient.email}
                </td>
                <td className="px-4 md:px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  <button
                    onClick={() => handleSignals(patient)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                  >
                    Signos
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

export default patientsListFamily;
