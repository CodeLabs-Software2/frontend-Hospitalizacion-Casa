import axios from "axios";

export const registerVitalSignals = async (data, id) => {
  let fecha = Date.now();
  const {
    heartRate,
    bloodPressure,
    temperature,
    oxygenSaturation,
    glucoseLevel,
    breathingFrequency,
  } = data;
  try {
    await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(heartRate),
      signo_id: 3,
      paciente_id: id,
    });
    await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(bloodPressure),
      signo_id: 2,
      paciente_id: id,
    });
    await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(temperature),
      signo_id: 1,
      paciente_id: id,
    });
    await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(oxygenSaturation),
      signo_id: 4,
      paciente_id: id,
    });
    await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(glucoseLevel),
      signo_id: 5,
      paciente_id: id,
    });
    return await axios.post("https://backendhospitalizacionencasa.azurewebsites.net/historialsignosvitales", {
      fecha,
      valor: parseFloat(breathingFrequency),
      signo_id: 6,
      paciente_id: id,
    });
  } catch (error) {
    console.log(error);
  }
};
