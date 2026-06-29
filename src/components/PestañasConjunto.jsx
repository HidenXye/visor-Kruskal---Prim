export function PestañasConjunto({ conjuntoActual, alCambiar }) {
    return (
        <div className="pestanas">
            <div
                className={`pestana${conjuntoActual === 'A' ? ' activa' : ''}`}
                onClick={() => alCambiar('A')}
            >
                Dataset A (x7=0, 498 filas)
            </div>
            <div
                className={`pestana${conjuntoActual === 'B' ? ' activa' : ''}`}
                onClick={() => alCambiar('B')}
            >
                Dataset B (x7=1, 502 filas)
            </div>
        </div>
    );
}
