import { HiOutlineCalendar, HiOutlineUserGroup } from "react-icons/hi";
import { BsPersonCheck } from "react-icons/bs";
import { RiHospitalLine } from "react-icons/ri";
import DoughnutChart from "../analitycs/doughnut";
import VerticalBarChart from "../analitycs/verticalBar";
import LineChart from "../analitycs/lineChart";

function dashboard() {
  return (
    <div className="flex flex-col sm:px-4 md:px-8 lg:px-12 xl:px-16">
      <nav className="bg-white border-b-2 border-gray-200 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </nav>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-green-500 rounded-full p-4">
              <HiOutlineCalendar className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-gray-500 uppercase">Citas</div>
              <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                32
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-yellow-500 rounded-full p-4">
              <HiOutlineUserGroup className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-gray-500 uppercase">Pacientes</div>
              <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                150
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-blue-500 rounded-full p-4">
              <BsPersonCheck className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-gray-500 uppercase">Consultas</div>
              <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                48
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-red-500 rounded-full p-4">
              <RiHospitalLine className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="ml-4 flex-1">
              <div className="text-gray-500 uppercase">Hospitales</div>
              <div className="font-bold text-2xl sm:text-3xl lg:w-12 lg:text-4xl">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-20 xl:mt-20 mt-10">
        <VerticalBarChart />
        <DoughnutChart />
        <LineChart />
      </section>
    </div>
  );
}

export default dashboard;
