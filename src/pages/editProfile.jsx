import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageCrop from "../components/ImageCrop";
import { useGlobalState } from "../store/GlobalState";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaCalendar, FaUser, FaUserAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { editUserProfile } from "../services/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function editProfile() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [imageProfile, setImageProfile] = useState("");

  const { profile, userType } = useGlobalState();

  const { setProfile } = useGlobalState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function handleImageClick() {
    setShowModal(true);
  }

  const handleSubmitForm = async (data) => {
    const res = await editUserProfile(data, profile.id);
    setProfile(res.data, userType);
    toast.success(`🦄 Datos actualizados`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/profile");

    console.log(res);
  };

  return (
    <div className="container mx-auto my-60">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="shadow-2xl relative rounded-lg w-5/6 md:w-1/4  lg:w-1/2 xl:w-1/2 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--4mfNEQ_X--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/616404/2501bf53-b528-4223-ba4e-4776d7f743d3.jpeg"
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              onClick={handleImageClick}
            />
          </div>
          {showModal && (
            <ImageCrop
              setImageProfile={setImageProfile}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          )}
          <div className="mt-16">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <div className="md:grid gap-4 grid-cols-2">
                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <HiOutlineIdentification className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Identificación"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.cedula}
                        {...register("identification", {
                          required: true,
                          minLength: 8,
                          maxLength: 10,
                          pattern: /^[0-9]+$/,
                        })}
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
                      <MdOutlineMailOutline className="text-gray-400 m-2" />
                      <input
                        type="email"
                        placeholder="Correo"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.email}
                        {...register("email", {
                          required: true,
                          minLength: 15,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.email?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima 15 digitos
                        </p>
                      )}
                      {errors.email?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.email?.type === "pattern" && (
                        <p className="text-xs text-red-500">
                          El campo debe tener formato de correo
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaUser className="text-gray-400 m-2" />
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.nombre}
                        {...register("name", {
                          required: true,
                          minLength: 4,
                          pattern: /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s']+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.name?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima de 4
                        </p>
                      )}
                      {errors.name?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.name?.type === "pattern" && (
                        <p className="text-xs text-red-500">
                          El campo debe tener solo letras
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaUserAlt className="text-gray-400 m-2" />
                      <input
                        type="text"
                        placeholder="Apellido"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.apellido}
                        {...register("lastname", {
                          required: true,
                          minLength: 4,
                          pattern: /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s']+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.lastname?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima de 4
                        </p>
                      )}
                      {errors.lastname?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.lastname?.type === "pattern" && (
                        <p className="text-xs text-red-500">
                          El campo debe tener solo letras
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FiPhone className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Celular"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.telefono}
                        {...register("cellphone", {
                          required: true,
                          minLength: 7,
                          maxLength: 10,
                          pattern: /^(?:\+57|0057|57)?[1-9]\d{6,9}$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.cellphone?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima de 7
                        </p>
                      )}
                      {errors.cellphone?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima de 10
                        </p>
                      )}
                      {errors.cellphone?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.cellphone?.type === "pattern" && (
                        <p className="text-xs text-red-500">
                          El campo debe tener el formato de telefono o celular
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaCalendar className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Edad"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.edad}
                        {...register("age", {
                          required: true,
                          minLength: 1,
                          maxLength: 2,
                          pattern: /^[0-9]+$/,
                        })}
                      />
                    </div>
                    <div>
                      {errors.cellphone?.type === "minLength" && (
                        <p className="text-xs text-red-500">
                          Longitud minima de 1
                        </p>
                      )}
                      {errors.cellphone?.type === "maxLength" && (
                        <p className="text-xs text-red-500">
                          Longitud maxima de 2
                        </p>
                      )}
                      {errors.cellphone?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                      {errors.cellphone?.type === "pattern" && (
                        <p className="text-xs text-red-500">
                          El campo debe contener solo numeros
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaCalendar className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Edad"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.direccion}
                        {...register("address", {
                          required: true,
                        })}
                      />
                    </div>
                    <div>
                      {errors.address?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 w-64 text-left">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-1">
                      <FaCalendar className="text-gray-400 m-2" />
                      <input
                        type="tel"
                        placeholder="Edad"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        defaultValue={profile.password}
                        {...register("password", {
                          required: true,
                        })}
                      />
                    </div>
                    <div>
                      {errors.address?.type === "required" && (
                        <p className="text-xs text-red-500">
                          Este campo es requerido
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="border-2 md:mt-4 mt-2 mb-10 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white duration-150"
                >
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default editProfile;
