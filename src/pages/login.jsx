import { useNavigate } from "react-router-dom";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useGlobalState } from "../store/GlobalState";
import { toast } from "react-toastify";
import { loginUser } from "../services/authentication";

function login() {
  const navigate = useNavigate();

  const { setProfile, setToken } = useGlobalState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (data) => {
    const userFind = await loginUser(data);
    console.log(userFind);
    if (userFind.status === 200) {
      setProfile(userFind.data.auth[0]);
      setToken(userFind.data.auth[1]);
      toast.success(`🦄 Bienvenido ${userFind.data.auth[0].nombre}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/dashboard");
    } else {
      toast.error(`🦄 Bienvenido ${userFind.data.auth[0].nombre}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center md:w-full flex-1 md:px-20 px-8 text-center mt-32">
      <div className="bg-white rounded-2xl shadow-2xl md:flex md:w-2/3 md:max-w-4xl">
        <section className="md:w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500">Code</span>Labs
          </div>
          <div className="md:py-10 py-5">
            <h2 className="md:text-3xl text-2xl font-bold text-green-500 mt-2 mb-2">
              Inicia Con Tu Cuenta
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>

            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit(handleSubmitForm)}
            >
              <div className="mb-3 w-64 text-left">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                  <HiOutlineIdentification className="text-gray-400 m-2" />
                  <input
                    type="tel"
                    defaultValue={"1234567899"}
                    {...register("identification", {
                      required: true,
                      minLength: 8,
                      maxLength: 10,
                      pattern: /^[0-9]+$/,
                    })}
                    placeholder="Identificación"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div>
                  {errors.identification?.type === "minLength" && (
                    <p className="text-xs text-red-500">
                      Longitud minima 8 digitos
                    </p>
                  )}
                  {errors.identification?.type === "maxLength" && (
                    <p className="text-xs text-red-500">
                      Longitud maxima 10 digitos
                    </p>
                  )}
                  {errors.identification?.type === "required" && (
                    <p className="text-xs text-red-500">
                      Este campo es requerido
                    </p>
                  )}
                  {errors.identification?.type === "pattern" && (
                    <p className="text-xs text-red-500">Solo numeros</p>
                  )}
                </div>
              </div>

              <div className="mb-3 w-64 text-left">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    defaultValue={"Miclave23"}
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 16,
                      pattern: /^(?=.*[A-Z])(?=.*\d).+$/,
                    })}
                    placeholder="Contraseña"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div>
                  {errors.password?.type === "minLength" && (
                    <p className="text-xs text-red-500">
                      Longitud minima 8 caracteres
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-xs text-red-500">
                      Longitud maxima 16 caracteres
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="text-xs text-red-500">
                      Este campo es requerido
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-xs text-red-500">
                      Debe contener al menos un numero y una mayuscula
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="border-2 md:mt-4 mt-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white duration-150"
              >
                Iniciar Sesión
              </button>
              <a
                href=""
                className="text-gray-400 md:mt-4 mt-3 hover:text-gray-500 duration-150 text-start"
              >
                Olvidé mi contraseña
              </a>
            </form>
          </div>
        </section>
        <section className="md:w-2/5 xs:h-48 bg-green-500 text-white lg:rounded-b-none lg:rounded-r-2xl rounded-b-2xl  md:py-36 p-3 px-12">
          <h2 className="md:text-3xl text-2xl font-bold mb-2">¡Hola!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="lg:mb-10 mb-5">
            Tu salud es nuestra prioridad, confía en nosotros.
          </p>
          <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 duration-150 mb-2">
            Registrarme
          </button>
        </section>
      </div>
    </main>
  );
}

export default login;
