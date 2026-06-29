import { useState, useRef, useCallback } from 'react';

export function Controles({
    pasoActual, totalPasos,
    alIrAPaso, alSiguiente, alAnterior, alFinal
}) {
    const [autoActivo, setAutoActivo] = useState(false);
    const [velocidad, setVelocidad] = useState(1200);
    const refTemporizador = useRef(null);

    const alternarAuto = useCallback(() => {
        if (refTemporizador.current) {
            clearInterval(refTemporizador.current);
            refTemporizador.current = null;
            setAutoActivo(false);
        } else {
            setAutoActivo(true);
            refTemporizador.current = setInterval(() => {
                alSiguiente();
            }, velocidad);
        }
    }, [velocidad, alSiguiente]);

    const alCambiarVelocidad = useCallback((e) => {
        const nueva = parseInt(e.target.value);
        setVelocidad(nueva);
        if (refTemporizador.current) {
            clearInterval(refTemporizador.current);
            refTemporizador.current = setInterval(() => {
                alSiguiente();
            }, nueva);
        }
    }, [alSiguiente]);

    return (
        <div className="controles">
            <button onClick={() => alIrAPaso(0)} title="Inicio">⏮</button>
            <button onClick={alAnterior} title="Anterior">◀</button>
            <span className="contador-paso">Paso {pasoActual} / {totalPasos}</span>
            <button onClick={alSiguiente} title="Siguiente">▶</button>
            <button onClick={alFinal} title="Final">⏭</button>
            <span style={{ width: 20 }} />
            <button
                onClick={alternarAuto}
                className={autoActivo ? 'boton-activo' : ''}
            >
                {autoActivo ? '⏸ Pausa' : '▶ Auto'}
            </button>
            <span className="etiqueta-vel">Velocidad:</span>
            <input
                type="range"
                className="deslizador"
                min="300"
                max="3000"
                value={velocidad}
                step="100"
                onChange={alCambiarVelocidad}
            />
            <span style={{ fontSize: 11, color: '#888', minWidth: 36 }}>
                {(velocidad / 1000).toFixed(1)}s
            </span>
        </div>
    );
}
