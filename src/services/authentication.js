import axios from "axios";

export const loginUser = async (credentialsUser) => {
  const { identification, password } = credentialsUser;
  console.log("credentialsUser", credentialsUser);
  return await axios.get(`https://backendhospitalizacionencasa.azurewebsites.net/login`, {
    params: {
      cedulausuario: identification,
      passwordusuario: password,
    },
  });
};
