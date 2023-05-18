import axios from "../assets/axios";

export const getClinicalHistory = async () => {
  return await axios.get("/send-email", {
    //envio de datos
  });
};
