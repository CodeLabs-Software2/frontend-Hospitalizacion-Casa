import { FaHospital } from "react-icons/fa";
import { GiMedicines, GiSyringe, GiStethoscope } from "react-icons/gi";

function home() {
  return (
    <div className="min-h-screen">
      {/* Encabezado */}

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Bienvenidos a la Clínica CodeLabs
        </h1>

        {/* Sección de servicios */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Consulta médica</h2>
            <p className="text-gray-700">
              Ofrecemos consultas médicas con especialistas en diversas áreas de
              la salud, incluyendo pediatría, cardiología, neurología y más.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Estudios clínicos</h2>
            <p className="text-gray-700">
              Contamos con un amplio catálogo de estudios clínicos para atender
              las necesidades de diagnóstico de nuestros pacientes, incluyendo
              análisis de sangre, radiografías, ecografías y más.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Atención hospitalaria</h2>
            <p className="text-gray-700">
              Ofrecemos atención hospitalaria en nuestras cómodas habitaciones
              para pacientes internados, con un equipo de profesionales
              capacitados para brindar una atención de calidad y calidez humana.
            </p>
          </div>
        </section>

        {/* Sección de citas */}
        <section className="bg-white rounded-lg shadow-md p-6 mt-12">
          <h2 className="text-2xl font-bold mb-4">Solicita tu cita</h2>
          <form className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <input
              type="text"
              placeholder="Especialidad"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <input
              type="date"
              placeholder="Fecha"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
            <textarea
              placeholder="Mensaje"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 duration-150 text-white py-2 px-4 rounded-md mt-4 sm:mt-0"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* Sección de servicios */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Nuestros servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 rounded-full p-2">
                  <GiMedicines className="text-white w-6 h-6" />
                </div>
                <h3 className="ml-4 font-bold">Farmacia</h3>
              </div>
              <p className="text-gray-500">
                Contamos con una farmacia donde puedes encontrar medicamentos y
                productos de salud de calidad y al mejor precio.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-2">
                  <GiSyringe className="text-white w-6 h-6" />
                </div>
                <h3 className="ml-4 font-bold">Vacunación</h3>
              </div>
              <p className="text-gray-500">
                Te ofrecemos la aplicación de vacunas con los más altos
                estándares de calidad y seguridad. Protégete a ti y a tu familia
                de enfermedades infecciosas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 rounded-full p-2">
                  <GiStethoscope className="text-white w-6 h-6" />
                </div>
                <h3 className="ml-4 font-bold">Consulta médica</h3>
              </div>
              <p className="text-gray-500">
                Nuestros médicos y especialistas están disponibles para
                atenderte y ofrecerte la mejor atención y tratamiento para tu
                salud.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default home;
