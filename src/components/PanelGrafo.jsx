import { useRef } from 'react';

export function PanelGrafo({ refContenedor, titulo }) {
    return (
        <div className="panel-grafo">
            <div className="titulo-grafo">{titulo}</div>
            <div id="red" ref={refContenedor}></div>
        </div>
    );
}
