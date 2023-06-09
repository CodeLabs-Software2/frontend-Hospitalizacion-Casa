import axios from "axios";

export const editUserProfile = async (user, id) => {
  console.log(user, id);
  return await axios.put("https://backendhospitalizacionencasa.azurewebsites.net/user", {
    id,
    nombre: user.name,
    apellido: user.lastname,
    cedula: user.identification,
    edad: parseInt(user.age),
    telefono: user.cellphone,
    email: user.email,
    password: user.password,
    direccion: user.address,
  });
};
