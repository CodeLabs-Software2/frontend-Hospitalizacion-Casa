import React from "react";
import { useGlobalState } from "../store/GlobalState";

function sendEmail() {
  const { notificationPatient, suggestion } = useGlobalState();

  const sugerencia =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit";

  const enviarCorreo = () => {
    // Petición al backend para enviar el correo
    //console.log(notificationPatient.correo, suggestion);
  };

  return (
    <div className="container my-32 md:my-60">
      <div className="bg-white mx-auto shadow-lg rounded-lg p-6 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Sugerencias para el familiar
        </h2>
        <p className="text-gray-600 mb-2 p-2 rounded-lg bg-gray-50">
          <b>Sugerencia:</b> {sugerencia}
        </p>
        <p className="text-gray-600 mb-2 p-2 rounded-lg bg-gray-50">
          <b>Para:</b> {notificationPatient.correo}
        </p>
        <div className="text-end">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-3"
            onClick={enviarCorreo}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default sendEmail;
