import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useGlobalState } from "../store/GlobalState";

function profile() {
  const { profile } = useGlobalState();

  return (
    <div className="container mx-auto my-60">
      <div>
        <div className="shadow-2xl relative rounded-lg w-5/6 md:w-5/6  lg:w-1/2 xl:w-1/2 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--4mfNEQ_X--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/616404/2501bf53-b528-4223-ba4e-4776d7f743d3.jpeg"
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
            <Link to="/edit-profile" className="absolute top-4 right-6">
              <HiOutlinePencilSquare
                size={35}
                className="p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 duration-150 cursor-pointer rounded-full shadow-md transition-all transform hover:scale-105"
              />
            </Link>
          </div>
          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">
              {profile.apellido}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              {profile.nombre}
            </p>
            <p>
              <span></span>
            </p>
            <div className="my-5 px-6">
              <p className="text-gray-100 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-green-500  ">
                <span className="font-bold">{profile.email} </span>
              </p>
            </div>

            <div className="w-full">
              <h3 className="font-medium text-gray-900 text-left px-6">
                Información
              </h3>
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block transition duration-150">
                  <span className="font-medium">Identificación:</span>{" "}
                  {profile.cedula}
                </p>
                <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block transition duration-150">
                  <span className="font-medium">Edad:</span> {profile.edad}
                </p>
                <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block transition duration-150">
                  <span className="font-medium">Celular:</span>{" "}
                  {profile.telefono}
                </p>
                <p className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block transition duration-150">
                  <span className="font-medium">Dirección:</span>{" "}
                  {profile.direccion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
