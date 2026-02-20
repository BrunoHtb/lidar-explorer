export const generateMockLidar = (count = 50000) => {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // 1. Gerar uma "Rua"
    const x = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;

    let y = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2;

    // Se estiver no centro, vira um "prédio"
    if (Math.abs(x) < 5 && Math.abs(z) < 5) {
      y = Math.random() * 20; 
    } else {
      y = (Math.random() - 0.5) * 0.5;
    }

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // 3. Colorir por Altura
    colors[i3] = y / 15; // R
    colors[i3 + 1] = 0.5; // G
    colors[i3 + 2] = 1 - y / 15; // B
  }

  return { positions, colors };
};
