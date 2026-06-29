export function PestañasAlgoritmo({ algoritmoActual, alCambiar }) {
    return (
        <div className="subpestanas">
            <div
                className={`subpestana${algoritmoActual === 'kruskal' ? ' activa' : ''}`}
                onClick={() => alCambiar('kruskal')}
            >
                Kruskal
            </div>
            <div
                className={`subpestana${algoritmoActual === 'prim' ? ' activa' : ''}`}
                onClick={() => alCambiar('prim')}
            >
                Prim
            </div>
        </div>
    );
}
