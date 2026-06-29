import { useState, useCallback, useEffect, useRef } from 'react';
import { PestañasConjunto } from './components/PestañasConjunto';
import { PestañasAlgoritmo } from './components/PestañasAlgoritmo';
import { PanelGrafo } from './components/PanelGrafo';
import { PanelInfo } from './components/PanelInfo';
import { Historial } from './components/Historial';
import { Controles } from './components/Controles';
import { useGrafo } from './hooks/useGrafo';
import { DATOS_CONJUNTO } from './data/pasos';

export default function App() {
    const [conjunto, setConjunto] = useState('A');
    const [algoritmo, setAlgoritmo] = useState('kruskal');
    const [paso, setPaso] = useState(0);

    const { refContenedor, iniciar, dibujarKruskal, dibujarPrim } = useGrafo();

    const pasos = DATOS_CONJUNTO[conjunto][algoritmo];
    const total = pasos.length;

    const dibujar = useCallback(() => {
        if (algoritmo === 'kruskal') {
            dibujarKruskal(pasos, paso);
        } else {
            dibujarPrim(pasos, paso);
        }
    }, [algoritmo, pasos, paso, dibujarKruskal, dibujarPrim]);

    useEffect(() => {
        iniciar();
    }, [iniciar]);

    useEffect(() => {
        dibujar();
    }, [dibujar]);

    useEffect(() => {
        const alPresionarTecla = (e) => {
            if (e.key === 'ArrowRight') setPaso(p => Math.min(total, p + 1));
            else if (e.key === 'ArrowLeft') setPaso(p => Math.max(0, p - 1));
            else if (e.key === 'Home') setPaso(0);
            else if (e.key === 'End') setPaso(total);
        };
        document.addEventListener('keydown', alPresionarTecla);
        return () => document.removeEventListener('keydown', alPresionarTecla);
    }, [total]);

    const cambiarConjunto = useCallback((c) => {
        setConjunto(c);
        setPaso(0);
    }, []);

    const cambiarAlgoritmo = useCallback((a) => {
        setAlgoritmo(a);
        setPaso(0);
    }, []);

    const titulo = `${algoritmo === 'kruskal' ? 'Kruskal' : 'Prim'} — Dataset ${conjunto}`;

    return (
        <>
            <div className="encabezado">
                <h1>Visualización Paso a Paso — Árboles de Dependencia (MST)</h1>
                <p>Dataset d9_strong.csv particionado por x7 | Algoritmos de Kruskal y Prim</p>
            </div>

            <PestañasConjunto conjuntoActual={conjunto} alCambiar={cambiarConjunto} />
            <PestañasAlgoritmo algoritmoActual={algoritmo} alCambiar={cambiarAlgoritmo} />

            <div className="principal">
                <PanelGrafo refContenedor={refContenedor} titulo={titulo} />
                <div className="panel-info">
                    <PanelInfo pasos={pasos} pasoActual={paso} algoritmoActual={algoritmo} />
                    <Historial pasos={pasos} pasoActual={paso} algoritmoActual={algoritmo} />
                </div>
            </div>

            <Controles
                pasoActual={paso}
                totalPasos={total}
                alIrAPaso={setPaso}
                alSiguiente={() => setPaso(p => Math.min(total, p + 1))}
                alAnterior={() => setPaso(p => Math.max(0, p - 1))}
                alFinal={() => setPaso(total)}
            />
        </>
    );
}
