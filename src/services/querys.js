import axios from "axios";

export const getFamily = async (id) => {
  return await axios.get(
    `http://localhost:8000/paciente/pacientesporfamiliar`,
    {
      params: {
        idfamiliar: id,
      },
    }
  );
};
