import axios from "axios";

export const getPatients = async (id) => {
  console.log(id);
  return await axios.get(`http://localhost:8000/personalAcargo/pacientes`, {
    params: {
      idmedico: parseInt(id),
    },
  });
};

export const getSuggestions = async (id) => {
  return await axios.get(`http://localhost:8000/cuidados/sugerencias`, {
    params: {
      idmedico: parseInt(id),
    },
  });
};

export const sendEmailToPatient = async (id) => {
  return await axios.get(`http://localhost:8000/cuidados/send_email`, {
    params: {
      id: parseInt(id),
    },
  });
};
