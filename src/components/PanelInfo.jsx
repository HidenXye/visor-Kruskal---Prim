export function PanelInfo({ pasos, pasoActual, algoritmoActual }) {
    const actual = pasoActual > 0 ? pasos[pasoActual - 1] : null;
    const totalPasos = pasos.length;

    let aceptadas = 0;
    let pesoAcum = 0;
    for (let i = 0; i < pasoActual; i++) {
        if (algoritmoActual === 'kruskal' && pasos[i].aceptado) {
            aceptadas++;
            pesoAcum += pasos[i].peso;
        }
        if (algoritmoActual === 'prim') {
            aceptadas++;
            pesoAcum += pasos[i].peso;
        }
    }

    const claseDecision = !actual
        ? 'valor pendiente'
        : (algoritmoActual === 'prim' || actual.aceptado)
            ? 'valor aceptado'
            : 'valor rechazado';

    const textoDecision = !actual
        ? '—'
        : (algoritmoActual === 'prim' || actual.aceptado)
            ? 'Aceptado'
            : 'Rechazado';

    return (
        <>
            <h3>Algoritmo de {algoritmoActual === 'kruskal' ? 'Kruskal' : 'Prim'}</h3>
            <div className="fila-info">
                <span className="etiqueta">Paso</span>
                <span className="valor">{pasoActual} / {totalPasos}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Arista evaluada</span>
                <span className="valor">{actual ? `${actual.origen} — ${actual.destino}` : '—'}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Peso IM</span>
                <span className="valor">{actual ? actual.peso.toFixed(4) : '—'}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Decisión</span>
                <span className={claseDecision}>{textoDecision}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Motivo</span>
                <span className="valor">{actual && actual.motivo ? actual.motivo : '—'}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Aristas aceptadas</span>
                <span className="valor">{aceptadas}</span>
            </div>
            <div className="fila-info">
                <span className="etiqueta">Peso acumulado MST</span>
                <span className="valor">{pesoAcum.toFixed(4)}</span>
            </div>
        </>
    );
}
