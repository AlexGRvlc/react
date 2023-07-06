import { useState, useEffect } from "react";
import { Header, Formulario, ListadoPacientes } from "./components";
import { eliminarPaciente } from "./helpers";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      if (pacientesLS.length > 0) {
        setPacientes(pacientesLS);
      }
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify( pacientes ));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
          setPacientes={setPacientes}
        />
      </div>
    </div>
  );
}

export default App;
