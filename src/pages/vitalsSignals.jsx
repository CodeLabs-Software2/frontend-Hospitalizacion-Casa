import { TbHeartRateMonitor } from "react-icons/tb";
import { FaTemperatureLow } from "react-icons/fa";
import { SiOxygen } from "react-icons/si";
import { FaLungs } from "react-icons/fa";
import { GiLightningFrequency, GiHeartBeats } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGlobalState } from "../store/GlobalState";
import { registerVitalSignals } from "../services/vitalSignals";
import { useNavigate } from "react-router-dom";

function vitalsSignals() {
  const { patient } = useGlobalState();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (data) => {
    // enviar data al backend
    await registerVitalSignals(data, patient.id);
    toast.success(`🦄 Registrados con exito`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/patients-list-family");
  };

  return (
    <div className="container mx-auto md:my-60 my-32">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="shadow-2xl relative rounded-lg w-5/6 md:w-1/4  lg:w-1/2 xl:w-1/2 mx-auto">
          <div className="mt-16">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h3 className="mt-10 md:text-3xl text-2xl font-bold">
                  Registro de signos vitales
                </h3>
                <div className="md:grid gap-4 grid-cols-2 mt-7">
                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <TbHeartRateMonitor className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Frecuencia cardiaca (ppm)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("heartRate", {
                          required: true,
                          minLength: 1,
                          maxLength: 3,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>

                    <div>
                      {errors.heartRate?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.heartRate?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 3 digitos
                        </p>
                      )}
                      {errors.heartRate?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.heartRate?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <GiHeartBeats className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Presion arterial (mmHg)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("bloodPressure", {
                          required: true,
                          minLength: 1,
                          maxLength: 3,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.bloodPressure?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.bloodPressure?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 3 digitos
                        </p>
                      )}
                      {errors.bloodPressure?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.bloodPressure?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaTemperatureLow className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Temperatura (°C)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("temperature", {
                          required: true,
                          minLength: 1,
                          maxLength: 2,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.temperature?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.temperature?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 2 digitos
                        </p>
                      )}
                      {errors.temperature?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.temperature?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <SiOxygen className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Sat. oxigeno (%)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("oxygenSaturation", {
                          required: true,
                          minLength: 1,
                          maxLength: 3,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.oxygenSaturation?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.oxygenSaturation?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 3 digitos
                        </p>
                      )}
                      {errors.oxygenSaturation?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.oxygenSaturation?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaLungs className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Nivel de glucosa (mg/dL)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("glucoseLevel", {
                          required: true,
                          minLength: 1,
                          maxLength: 3,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.glucoseLevel?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.glucoseLevel?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 3 digitos
                        </p>
                      )}
                      {errors.glucoseLevel?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.glucoseLevel?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <GiLightningFrequency className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Frecuencia respiratoria (rpm)"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={34}
                        {...register("breathingFrequency", {
                          required: true,
                          minLength: 1,
                          maxLength: 3,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.breathingFrequency?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 1 digito
                        </p>
                      )}
                      {errors.breathingFrequency?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima 3 digitos
                        </p>
                      )}
                      {errors.breathingFrequency?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.breathingFrequency?.type === "pattern" && (
                        <p className="text-xs text-red-500">Solo numeros</p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="border-2 md:mt-4 mt-2 mb-10 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white duration-150"
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default vitalsSignals;
