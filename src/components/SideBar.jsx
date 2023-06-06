import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineLogout,
  MdOutlineLogin,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TfiWrite } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useGlobalState } from "../store/GlobalState";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";

function SideBar() {
  const profile = useGlobalState((state) => state.profile);
  const userType = useGlobalState((state) => state.userType);
  const logout = useGlobalState((state) => state.logout);

  console.log(userType);
  return (
    <nav>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-green-500 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:rind-green-600 group hover:bg-green-600">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>

        <div className="p-6 w-3/5 h-full bg-gray-50 z-20 fixed top-0 -left-96 lg:w-2/12 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ">
          <div className="flex flex-col justify-start items-center">
            <NavLink
              to="/"
              className="text-base text-center cursor-pointer font-bold border-b border-gray-200 pb-4 w-full"
            >
              <span className="text-green-500">Code</span>Labs
            </NavLink>
            {profile ? (
              <div className="my-4 border-b border-gray-200 pb-4 w-full">
                <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                  <NavLink
                    to="/dashboard"
                    className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                  >
                    Dashboard
                  </NavLink>
                </div>

                <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                  <NavLink
                    to="/profile"
                    className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                  >
                    Mi Perfil
                  </NavLink>
                </div>

                {userType.includes("doctor") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <HiOutlineClipboardDocumentList className="text-2xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/clinical-history-doctor"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Historias Clinicas
                    </NavLink>
                  </div>
                ) : userType.includes("familiar") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <HiOutlineClipboardDocumentList className="text-2xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/clinical-history-family"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Historias Clinicas
                    </NavLink>
                  </div>
                ) : userType.includes("paciente") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <HiOutlineClipboardDocumentList className="text-2xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/clinical-history-patient"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Mi Historia Clinica
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}

                {userType.includes("doctor") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <HiOutlineUsers className="text-xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/patients-list-family"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Mis Pacientes
                    </NavLink>
                  </div>
                ) : userType.includes("familiar") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <TfiWrite className="text-xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/patients-list-family"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Mis Acudidos
                    </NavLink>
                  </div>
                ) : userType.includes("paciente") ? (
                  <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <TfiWrite className="text-xl text-gray-600 group-hover:text-white " />
                    <NavLink
                      to="/patients-list-family"
                      className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                    >
                      Mis Signos
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}

                {userType.includes("doctor") ? (
                  <div>
                    <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <AiOutlineUsergroupDelete className="text-2xl text-gray-600 group-hover:text-white " />
                      <NavLink
                        to="/patients-list"
                        className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                      >
                        Listar Pacientes
                      </NavLink>
                    </div>
                    <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                      <IoMdNotificationsOutline className="text-2xl text-gray-600 group-hover:text-white " />
                      <NavLink
                        to="/send-email"
                        className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                      >
                        Enviar Sugerencia
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {profile ? (
              <div className="my-4 w-full">
                <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
                  <NavLink
                    onClick={() => logout()}
                    to="/"
                    className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                  >
                    Cerrar Sesión
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="my-4 w-full">
                <div className="flex mb-2 justify-start items-center gap-4 md:px-5 px-1 hover:bg-green-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogin className="text-2xl text-gray-600 group-hover:text-white " />
                  <NavLink
                    to="/login"
                    className="text-base w-full text-gray-800 group-hover:text-white font-semibold"
                  >
                    Iniciar Sesión
                  </NavLink>
                </div>
              </div>
            )}
            {profile ? (
              <div className="absolute bottom-4 w-full text-center">
                <h1 className="text-lg font-bold text-green-500 mt-4">
                  {profile.nombre}
                </h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Disclosure>
    </nav>
  );
}

export default SideBar;
