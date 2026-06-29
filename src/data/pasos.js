export const COLORES = {
    x1: '#4C72B0', x2: '#55A868', x5: '#C44E52',
    x4: '#8172B2', x6: '#CCB974', x9: '#64B5CD', x3: '#8C6D31'
};

export const LISTA_NODOS = ['x1', 'x2', 'x5', 'x4', 'x6', 'x9', 'x3'];

export const posicionesNodos = {};
LISTA_NODOS.forEach((n, i) => {
    const angulo = (i / 7) * 2 * Math.PI - Math.PI / 2;
    posicionesNodos[n] = { x: 220 * Math.cos(angulo), y: 220 * Math.sin(angulo) };
});

export const KRUSKAL_A = [
    { origen: 'x6', destino: 'x9', peso: 0.9998, aceptado: true },
    { origen: 'x2', destino: 'x5', peso: 0.6869, aceptado: true },
    { origen: 'x4', destino: 'x9', peso: 0.6860, aceptado: true },
    { origen: 'x1', destino: 'x5', peso: 0.4237, aceptado: true },
    { origen: 'x5', destino: 'x9', peso: 0.0069, aceptado: true },
    { origen: 'x1', destino: 'x2', peso: 0.0061, aceptado: false, motivo: 'Ciclo: x1—x5—x2—x1' },
    { origen: 'x9', destino: 'x3', peso: 0.0058, aceptado: true },
    { origen: 'x4', destino: 'x3', peso: 0.0048, aceptado: false, motivo: 'Ciclo: x4—x9—x3—x4' },
    { origen: 'x2', destino: 'x9', peso: 0.0031, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x9', peso: 0.0029, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x4', peso: 0.0018, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x5', destino: 'x4', peso: 0.0012, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x5', destino: 'x3', peso: 0.0012, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x5', destino: 'x6', peso: 0.0008, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x2', destino: 'x3', peso: 0.0006, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x3', peso: 0.0005, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x6', destino: 'x4', peso: 0.0004, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x6', peso: 0.0004, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x6', destino: 'x3', peso: 0.0004, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x2', destino: 'x6', peso: 0.0002, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x2', destino: 'x4', peso: 0.0000, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' }
];

export const KRUSKAL_B = [
    { origen: 'x6', destino: 'x9', peso: 0.9974, aceptado: true },
    { origen: 'x4', destino: 'x9', peso: 0.7475, aceptado: true },
    { origen: 'x2', destino: 'x5', peso: 0.6555, aceptado: true },
    { origen: 'x1', destino: 'x5', peso: 0.4150, aceptado: true },
    { origen: 'x5', destino: 'x9', peso: 0.0162, aceptado: true },
    { origen: 'x5', destino: 'x6', peso: 0.0095, aceptado: false, motivo: 'Ciclo: x5—x9—x6—x5' },
    { origen: 'x1', destino: 'x9', peso: 0.0069, aceptado: false, motivo: 'Ciclo: x1—x5—x9—x1' },
    { origen: 'x6', destino: 'x1', peso: 0.0064, aceptado: false, motivo: 'Ciclo: x6—x9—x5—x1—x6' },
    { origen: 'x5', destino: 'x4', peso: 0.0063, aceptado: false, motivo: 'Ciclo: x5—x9—x4—x5' },
    { origen: 'x2', destino: 'x9', peso: 0.0054, aceptado: false, motivo: 'Ciclo: x5—x9—x2—x5' },
    { origen: 'x2', destino: 'x6', peso: 0.0039, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x2', peso: 0.0024, aceptado: false, motivo: 'Ciclo: x1—x5—x2—x1' },
    { origen: 'x1', destino: 'x3', peso: 0.0022, aceptado: true },
    { origen: 'x2', destino: 'x4', peso: 0.0013, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x5', destino: 'x3', peso: 0.0007, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x2', destino: 'x3', peso: 0.0008, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x4', destino: 'x6', peso: 0.0001, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x6', destino: 'x3', peso: 0.0001, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x9', destino: 'x3', peso: 0.0001, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x4', destino: 'x3', peso: 0.0000, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' },
    { origen: 'x1', destino: 'x4', peso: 0.0000, aceptado: false, motivo: 'Ciclo: todos los nodos ya conectados' }
];

export const PRIM_A = [
    { origen: 'x5', destino: 'x2', peso: 0.6869, visitados: ['x5', 'x2'] },
    { origen: 'x5', destino: 'x1', peso: 0.4237, visitados: ['x5', 'x2', 'x1'] },
    { origen: 'x5', destino: 'x9', peso: 0.0069, visitados: ['x5', 'x2', 'x1', 'x9'] },
    { origen: 'x9', destino: 'x6', peso: 0.9998, visitados: ['x5', 'x2', 'x1', 'x9', 'x6'] },
    { origen: 'x9', destino: 'x4', peso: 0.6860, visitados: ['x5', 'x2', 'x1', 'x9', 'x6', 'x4'] },
    { origen: 'x9', destino: 'x3', peso: 0.0058, visitados: ['x5', 'x2', 'x1', 'x9', 'x6', 'x4', 'x3'] }
];

export const PRIM_B = [
    { origen: 'x5', destino: 'x2', peso: 0.6555, visitados: ['x5', 'x2'] },
    { origen: 'x5', destino: 'x1', peso: 0.4150, visitados: ['x5', 'x2', 'x1'] },
    { origen: 'x5', destino: 'x9', peso: 0.0162, visitados: ['x5', 'x2', 'x1', 'x9'] },
    { origen: 'x9', destino: 'x6', peso: 0.9974, visitados: ['x5', 'x2', 'x1', 'x9', 'x6'] },
    { origen: 'x9', destino: 'x4', peso: 0.7475, visitados: ['x5', 'x2', 'x1', 'x9', 'x6', 'x4'] },
    { origen: 'x1', destino: 'x3', peso: 0.0022, visitados: ['x5', 'x2', 'x1', 'x9', 'x6', 'x4', 'x3'] }
];

export const DATOS_CONJUNTO = {
    A: { kruskal: KRUSKAL_A, prim: PRIM_A, pesoMST: 2.8092 },
    B: { kruskal: KRUSKAL_B, prim: PRIM_B, pesoMST: 2.8337 }
};
