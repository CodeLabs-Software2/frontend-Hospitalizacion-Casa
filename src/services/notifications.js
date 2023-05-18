import axios from "../assets/axios";

export const sendEmail = async () => {
  return await axios.post("/send-email", {
    //envio de datos
  });
};
