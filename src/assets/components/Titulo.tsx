interface TItuloPorps {
    titulo: string;
}


export const Titulo = ({ titulo }: TItuloPorps) => {
    return (
        <h1 className="mb-5 text-6xl">{titulo}</h1>
    );
}