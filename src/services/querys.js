import axios from "axios";

export const getPatients = async (id) => {
  console.log(id);
  return await axios.get(`https://backendhospitalizacionencasa.azurewebsites.net/personalAcargo/pacientes`, {
    params: {
      idmedico: parseInt(id),
    },
  });
};

export const getSuggestions = async (id) => {
  return await axios.get(`https://backendhospitalizacionencasa.azurewebsites.net/cuidados/sugerencias`, {
    params: {
      idmedico: parseInt(id),
    },
  });
};

export const sendEmailToPatient = async (id) => {
  return await axios.get(`https://backendhospitalizacionencasa.azurewebsites.net/cuidados/send_email`, {
    params: {
      id: parseInt(id),
    },
  });
};

export const getFamily = async (id) => {
  return await axios.get(
    `https://backendhospitalizacionencasa.azurewebsites.net/paciente/pacientesporfamiliar`,
    {
      params: {
        idfamiliar: parseInt(id),
      },
    }
  );
};
