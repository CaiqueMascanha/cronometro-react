import { useEffect, useState } from "react"

interface contadorProps {
    onRegister: (tempo: string) => void;
}

export const Contador = ({ onRegister }: contadorProps) => {
    const [segundos, setSegundos] = useState(0);
    const [rodando, setRodando] = useState(false);

    let varientButton = rodando ? 'bg-red-500' : 'bg-green-500';
    let variantShadown = rodando ? 'shadow-red-500/50' : 'shadow-green-500/50'

     function formatarTempo(totalSegundos: number) {
        const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, "0");
        const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, "0");
        const segundos = String(totalSegundos % 60).padStart(2, "0");

        return `${horas}:${minutos}:${segundos}`;
    }

    useEffect(() => {
        if(rodando) {
            const timer = setInterval(() => {
                setSegundos(prev => prev + 1)
            }, 1000)
            
        return () => clearInterval(timer)
        }

        
    }, [rodando])




    return (
        <div className="flex flex-col justify-center items-center">
            <span className="text-5xl">
                {formatarTempo(segundos)}
            </span>
            <div className="flex flex-row gap-4">
                <button 
                    className={`${varientButton} shadow-lg ${variantShadown} rounded-lg p-1.5 px-8 mt-4 text-white cursor-pointer text-2xl`}
                    onClick={() => setRodando(prev => !prev)}
                > 
                    {rodando ? 'Parar' : 'Iniciar'} 
                </button>
                {segundos > 0 &&  
                    <button 
                        className="text-center cursor-pointer mt-4  p-1.5 px-8 bg-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 text-white text-2xl"
                        onClick={() => { setSegundos(0), setRodando(false), onRegister(formatarTempo(segundos))}}>
                        Zerar
                    </button>}
                
            </div>
        </div>
        

    )
}