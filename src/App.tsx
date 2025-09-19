import { useState } from "react"
import { Contador } from "./assets/components/Contador"
import { Titulo } from "./assets/components/Titulo"
import { Tabela } from "./assets/components/Tabela";

function App() {
  const [historico, setHistorico] = useState<{ data: string; tempo: string}[]>([])

  const registrarTempo = (tempo: string) => {
    const agora = new Date();
    const dataFormatada = agora.toLocaleString('pt-BR');

    setHistorico((prev) => [...prev, { data: dataFormatada, tempo }]);
  };


  return (
    <div className="h-screen flex items-center justify-center bg-gray-300">
      <main className="flex flex-col items-center justify-center shadow-xl/30 rounded-b-xl p-20">
        <Titulo titulo="CRONOMETRO" />
        <Contador onRegister={registrarTempo}/>
        <Tabela historico={historico}/>
      </main>
    </div>

  )
}

export default App
