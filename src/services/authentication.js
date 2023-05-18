import axios from "axios";

export const loginUser = async (credentialsUser) => {
  const { identification, password } = credentialsUser;
  console.log("credentialsUser", credentialsUser);
  return await axios.get(`http://127.0.0.1:8000/login`, {
    params: {
      cedulausuario: identification,
      passwordusuario: password,
    },
  });
};
