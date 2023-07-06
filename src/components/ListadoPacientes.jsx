/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente, setPacientes }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center"> ListadoPacientes</h2>

          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes?.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              pacientes={pacientes}
              eliminarPaciente={eliminarPaciente}
              setPacientes = { setPacientes }
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No Hay Pacientes</h2>

          <p className="text-xl mt-5 text-center mb-10">
            Comienza a agregar pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
