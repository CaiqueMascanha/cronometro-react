interface tabelaProps {
    historico: {data: string, tempo: string}[];
}


export const Tabela = ({ historico }: tabelaProps) => {
    return (
        <div className="mt-6 w-full max-w-md overflow-x-auto">
            <div className="max-h-120 overflow-y-auto border border-cyan-500 rounded-lg shadow-lg">
                <table className="w-full border-separate border-spacing-0">
                <thead>
                    <tr className="bg-cyan-600 text-cyan-50 text-xl">
                    <th className="border border-cyan-500 px-6 py-3 text-left">Data</th>
                    <th className="border border-cyan-500 px-6 py-3 text-left">Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {historico.map((v, index) => (
                    <tr
                        key={index}
                        className={`${
                        index % 2 === 0 ? "bg-cyan-50" : "bg-white"
                        } hover:bg-cyan-100 transition cursor-pointer`}
                    >
                        <td className="border border-cyan-400 px-6 py-2">{v.data}</td>
                        <td className="border border-cyan-400 px-6 py-2 font-mono">
                        {v.tempo}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>

        
    )
}