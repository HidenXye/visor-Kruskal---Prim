export function Historial({ pasos, pasoActual, algoritmoActual }) {
    return (
        <div className="historial">
            <h4>Historial de aristas</h4>
            {pasos.map((p, i) => {
                let clase = 'item-arista';
                if (i < pasoActual) {
                    clase += p.aceptado !== false ? ' hecho-aceptado' : ' hecho-rechazado';
                } else if (i === pasoActual) {
                    clase += ' actual';
                } else {
                    clase += ' futuro';
                }

                const decision = algoritmoActual === 'prim' ? '' : (p.aceptado ? ' \u2713' : ' \u2717');

                return (
                    <div key={i} className={clase}>
                        {i + 1}. {p.origen}\u2014{p.destino}  {p.peso.toFixed(4)}{decision}
                    </div>
                );
            })}
        </div>
    );
}
