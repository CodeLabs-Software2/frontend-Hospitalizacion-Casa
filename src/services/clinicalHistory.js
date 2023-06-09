import axios from "axios";

export const getClinicalHistory = async (id) => {
  return await axios
    .get(
      "https://backendhospitalizacionencasa.azurewebsites.net/historialDiagnostico/listar_diagnosticos",
      {
        params: {
          id: parseInt(id),
        },
      },

      { responseType: "blob" }
    )
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "historial_clinico.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
