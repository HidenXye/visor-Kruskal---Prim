import { useRef, useEffect, useCallback } from 'react';
import { Network, DataSet } from 'vis-network/standalone';
import { LISTA_NODOS, COLORES, posicionesNodos } from '../data/pasos';

export function useGrafo() {
    const refContenedor = useRef(null);
    const refRed = useRef(null);
    const refNodos = useRef(null);
    const refAristas = useRef(null);

    const iniciar = useCallback(() => {
        const arrNodos = LISTA_NODOS.map(id => ({
            id,
            label: id,
            x: posicionesNodos[id].x,
            y: posicionesNodos[id].y,
            fixed: { x: true, y: true },
            color: { background: COLORES[id], border: '#333' },
            font: { color: 'white', size: 18, face: 'Segoe UI', bold: true },
            shape: 'circle',
            size: 35
        }));

        refNodos.current = new DataSet(arrNodos);
        refAristas.current = new DataSet([]);

        const opciones = {
            physics: false,
            interaction: { dragNodes: false, zoomView: true, dragView: true },
            edges: {
                font: {
                    size: 13, color: '#c0392b', background: 'white',
                    strokeWidth: 0, face: 'Consolas, monospace', bold: true
                },
                width: 2.5,
                selectionWidth: 3,
                smooth: { type: 'continuous' }
            }
        };

        refRed.current = new Network(
            refContenedor.current,
            { nodes: refNodos.current, edges: refAristas.current },
            opciones
        );
    }, []);

    const dibujarKruskal = useCallback((pasos, pasoActual) => {
        if (!refAristas.current || !refNodos.current) return;
        refAristas.current.clear();

        for (let i = 0; i < pasoActual; i++) {
            const p = pasos[i];
            const idArista = `${p.origen}--${p.destino}`;

            if (p.aceptado) {
                refAristas.current.add({
                    id: idArista,
                    from: p.origen,
                    to: p.destino,
                    label: p.peso.toFixed(4),
                    color: { color: '#16a34a', highlight: '#16a34a' },
                    width: 2.5
                });
            } else if (i === pasoActual - 1) {
                refAristas.current.add({
                    id: idArista,
                    from: p.origen,
                    to: p.destino,
                    label: p.peso.toFixed(4),
                    color: { color: '#dc2626', highlight: '#dc2626' },
                    width: 2,
                    dashes: [8, 4]
                });
            }
        }

        refNodos.current.forEach(n => {
            refNodos.current.update({
                id: n.id,
                borderWidth: 1,
                color: { background: COLORES[n.id], border: '#333' }
            });
        });

        if (pasoActual > 0 && !pasos[pasoActual - 1].aceptado) {
            const rech = pasos[pasoActual - 1];
            refNodos.current.update({
                id: rech.origen,
                borderWidth: 3,
                color: { background: COLORES[rech.origen], border: '#dc2626' }
            });
            refNodos.current.update({
                id: rech.destino,
                borderWidth: 3,
                color: { background: COLORES[rech.destino], border: '#dc2626' }
            });
        }
    }, []);

    const dibujarPrim = useCallback((pasos, pasoActual) => {
        if (!refAristas.current || !refNodos.current) return;
        refAristas.current.clear();

        for (let i = 0; i < pasoActual; i++) {
            const p = pasos[i];
            refAristas.current.add({
                id: `${p.origen}--${p.destino}`,
                from: p.origen,
                to: p.destino,
                label: p.peso.toFixed(4),
                color: { color: '#16a34a', highlight: '#16a34a' },
                width: 2.5
            });
        }

        refNodos.current.forEach(n => {
            refNodos.current.update({
                id: n.id,
                borderWidth: 1,
                color: { background: COLORES[n.id], border: '#333' }
            });
        });

        if (pasoActual > 0) {
            const { visitados } = pasos[pasoActual - 1];
            visitados.forEach(n => {
                refNodos.current.update({
                    id: n,
                    borderWidth: 3,
                    color: { background: COLORES[n], border: '#16a34a' }
                });
            });
        }
    }, []);

    useEffect(() => {
        return () => {
            if (refRed.current) {
                refRed.current.destroy();
                refRed.current = null;
            }
        };
    }, []);

    return { refContenedor, iniciar, dibujarKruskal, dibujarPrim };
}
